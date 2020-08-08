const Invoice = require('src/domain/invoice/Invoice');

const SequelizeInvoiceMapper = {
  toEntity({ dataValues }) {
    const {
      id,
      invoice_number,
      total,
      currency,
      vendor_name,
      remittance_address,
      status,
      invoice_date,
      due_date
   } = dataValues;

   return new Invoice({
      id,
      invoice_number,
      total,
      currency,
      vendor_name,
      remittance_address,
      status,
      invoice_date,
      due_date
   });
  },

  toDatabase(survivor) {
    const {
      invoice_number,
      total,
      currency,
      vendor_name,
      remittance_address,
      status,
      invoice_date,
      due_date
   } = survivor;

   return {
      invoice_number,
      total,
      currency,
      vendor_name,
      remittance_address,
      status,
      invoice_date,
      due_date
   };
  }
};

module.exports = SequelizeInvoiceMapper;
