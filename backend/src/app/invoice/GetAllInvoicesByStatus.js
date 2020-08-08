const Operation = require('src/app/Operation');

class GetAllInvoicesByStatus extends Operation {
  constructor({ invoicesRepository }) {
    super();
    this.invoicesRepository = invoicesRepository;
  }

  async execute(status) {
    const { SUCCESS, ERROR } = this.outputs;

    try {
      const invoices = await this.invoicesRepository.getAllInvoicesByStatus(status);

      this.emit(SUCCESS, invoices);
    } catch(error) {
      this.emit(ERROR, error);
    }
  }
}

GetAllInvoicesByStatus.setOutputs(['SUCCESS', 'ERROR']);

module.exports = GetAllInvoicesByStatus;
