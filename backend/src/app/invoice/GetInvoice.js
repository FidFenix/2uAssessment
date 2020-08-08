const Operation = require('src/app/Operation');

class GetInvoice extends Operation {
  constructor({ invoicesRepository }) {
    super();
    this.invoicesRepository = invoicesRepository;
  }

  async execute(invoiceId) {
    const { SUCCESS, NOT_FOUND } = this.outputs;

    try {
      const invoice = await this.invoicesRepository.getById(invoiceId);
      this.emit(SUCCESS, invoice);
    } catch(error) {
      this.emit(NOT_FOUND, {
        type: error.message,
        details: error.details
      });
    }
  }
}

GetInvoice.setOutputs(['SUCCESS', 'ERROR', 'NOT_FOUND']);

module.exports = GetInvoice;
