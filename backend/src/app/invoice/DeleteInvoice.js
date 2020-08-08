const Operation = require('src/app/Operation');

class DeleteInvoice extends Operation {
  constructor({ invoicesRepository }) {
    super();
    this.invoicesRepository = invoicesRepository;
  }

  async execute(invoiceId) {
    const { SUCCESS, ERROR, NOT_FOUND } = this.outputs;

    try {
      await this.invoicesRepository.remove(invoiceId);
      this.emit(SUCCESS);
    } catch(error) {
      if(error.message === 'NotFoundError') {
        return this.emit(NOT_FOUND, error);
      }

      this.emit(ERROR, error);
    }
  }
}

DeleteInvoice.setOutputs(['SUCCESS', 'ERROR', 'NOT_FOUND']);

module.exports = DeleteInvoice;
