const Operation = require('src/app/Operation');

class ApproveInvoice extends Operation {
  constructor({ invoicesRepository }) {
    super();
    this.invoicesRepository = invoicesRepository;
  }

  async execute(invoiceId) {
    const { SUCCESS, NOT_FOUND } = this.outputs;

    try {
      const invoices = await this.invoicesRepository.approveInvoice(invoiceId);
      this.emit(SUCCESS, invoices);
    } catch(error) {
      this.emit(NOT_FOUND, {
        type: error.message,
        details: error.details
      });
    }
  }
}

ApproveInvoice.setOutputs(['SUCCESS', 'ERROR', 'NOT_FOUND']);

module.exports = ApproveInvoice;
