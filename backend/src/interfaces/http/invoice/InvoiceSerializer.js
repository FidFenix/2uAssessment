const GlobalFunctions = require('src/utils/GlobalFunctions');

const InvoiceSerializer = {
   serialize({
      id,
      invoice_number,
      total,
      currency,
      vendor_name,
      remittance_address,
      status,
      invoice_date,
      due_date
   }) {
      
      invoice_date = GlobalFunctions.dateFromPostgres(invoice_date);
      due_date = GlobalFunctions.dateFromPostgres(due_date);

     return {
      id,
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
 
 module.exports = InvoiceSerializer;
 