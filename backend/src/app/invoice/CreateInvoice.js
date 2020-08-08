const Operation = require('src/app/Operation');
const Invoice = require('src/domain/invoice/Invoice');

class CreateInvoice extends Operation {
  constructor({ invoicesRepository }) {
    super();
    this.invoicesRepository = invoicesRepository;
  }

  async execute(userData) {
    const { SUCCESS, ERROR, VALIDATION_ERROR } = this.outputs;

    const invoice = new Invoice(userData);
    invoice.setStatus('PENDING');
    invoice.formatInvoiceDate();
    invoice.formatDueDate();

    try {
      const newInvoice = await this.invoicesRepository.add(invoice);

      this.emit(SUCCESS, newInvoice);
    } catch(error) {
      if(error.message === 'ValidationError') {
        return this.emit(VALIDATION_ERROR, error);
      }

      this.emit(ERROR, error);
    }
  }
}

CreateInvoice.setOutputs(['SUCCESS', 'ERROR', 'VALIDATION_ERROR']);

module.exports = CreateInvoice;
