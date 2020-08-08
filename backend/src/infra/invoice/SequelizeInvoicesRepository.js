const InvoiceMapper = require('./SequelizeInvoiceMapper');

class SequelizeInvoicesRepository {
  constructor({ InvoiceModel }) {
    this.InvoiceModel = InvoiceModel;
  }

  async getAll() {
    const invoices = await this.InvoiceModel.findAll();

    return invoices.map(InvoiceMapper.toEntity);
  }

  async getById(id) {
    const invoice = await this._getById(id);

    return InvoiceMapper.toEntity(invoice);
  }

  async add(invoice) {
    const { valid, errors } = invoice.validate();

    if(!valid) {
      const error = new Error('ValidationError');
      error.details = errors;

      throw error;
    }

    const newInvoice = await this.InvoiceModel.create(InvoiceMapper.toDatabase(invoice));
    return InvoiceMapper.toEntity(newInvoice);
  }

  async remove(id) {
    const invoice = await this._getById(id);

    await invoice.destroy();
    return;
  }

  async update(id, newData) {
    const invoice = await this._getById(id);

    const transaction = await this.InvoiceModel.sequelize.transaction();

    try {
      const updatedInvoice = await invoice.update(newData, { transaction });
      const invoiceEntity = InvoiceMapper.toEntity(updatedInvoice);

      const { valid, errors } = invoiceEntity.validate();

      if(!valid) {
        const error = new Error('ValidationError');
        error.details = errors;

        throw error;
      }

      await transaction.commit();

      return invoiceEntity;
    } catch(error) {
      await transaction.rollback();

      throw error;
    }
  }

  async count() {
    return await this.InvoiceModel.count();
  }

  // Private

  async _getById(id) {
    try {
      return await this.InvoiceModel.findById(id, { rejectOnEmpty: true });
    } catch(error) {
      if(error.name === 'SequelizeEmptyResultError') {
        const notFoundError = new Error('NotFoundError');
        notFoundError.details = `Invoice can't be found.`;

        throw notFoundError;
      }

      throw error;
    }
  }

  async getAllInvoicesByStatus(statusSearch){
     const invoices = await this.InvoiceModel.findAll({ where:{status:statusSearch}});
     return invoices.map(InvoiceMapper.toEntity);
  }

  async approveInvoice(invoiceId) {
   try{
      const invoice = await this._getById(invoiceId);

      const invoiceModified= InvoiceMapper.toEntity(invoice);
      invoiceModified.setStatus('APPROVED');
      await this.update(invoiceId, invoiceModified);
      return await this.getAllInvoicesByStatus('PENDING');
   }catch(error) {
      throw error;
   }
 }
}

module.exports = SequelizeInvoicesRepository;
