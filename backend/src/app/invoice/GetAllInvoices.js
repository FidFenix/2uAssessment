const Operation = require('src/app/Operation');

class GetAllInvoices extends Operation {
  constructor({ invoicesRepository }) {
    super();
    this.invoicesRepository = invoicesRepository;
  }

  async execute() {
    const { SUCCESS, ERROR } = this.outputs;

    try {
      const invoices = await this.invoicesRepository.getAll();

      this.emit(SUCCESS, invoices);
    } catch(error) {
      this.emit(ERROR, error);
    }
  }
}

GetAllInvoices.setOutputs(['SUCCESS', 'ERROR']);

module.exports = GetAllInvoices;
