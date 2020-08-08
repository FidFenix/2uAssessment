const { attributes } = require('structure');

const Invoice = attributes({
  id: Number,
  invoice_number: {
   type: String,
   required: true
  },
  total: {
    type: Number,
    required: true
  },
  currency: {
   type: String,
   required: true
  },
  vendor_name: {
   type: String,
   required: true
  },
  remittance_address: {
   type: String,
   required: true
  },
  status: {
     type:String,
     default: 'CREATED'
  },
  due_date: {
     type:Date
  },
  invoice_date: {
     type:Date
  }
})(class Invoice {

   /*Setters*/
   setStatus(newStatus) {
      this.status = newStatus;
   }
   formatDueDate() {
      this.due_date.setDate(this.due_date.getDate() + 1);
   }
   formatInvoiceDate() {
      this.invoice_date.setDate(this.invoice_date.getDate() + 1);
   }
   isLegal() {
     return this.status in Invoice.STATES;
   }
});

Invoice.STATES = [
   'PENDING',
   'APPROVED',
   'CANCELED',
   'CREATED',
   'REJECTED',
];

module.exports = Invoice;
