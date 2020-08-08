const { Router } = require('express');
const { inject } = require('awilix-express');
const Status = require('http-status');

const InvoicesController = {
  get router() {
    const router = Router();

    router.use(inject('invoiceSerializer'));

    router.get('/', inject('getAllInvoices'), this.index);
    router.get('/:id', inject('getInvoice'), this.show);
    router.post('/', inject('createInvoice'), this.create);
    router.put('/:id', inject('updateInvoice'), this.update);
    router.delete('/:id', inject('deleteInvoice'), this.delete);
    router.get('/status/:status', inject('getAllInvoicesByStatus'), this.getAllByStatus);
    router.get('/approval/:id', inject('approveInvoice'), this.approve);

    return router;
  },

  index(req, res, next) {
    const { getAllInvoices, invoiceSerializer } = req;
    const { SUCCESS, ERROR } = getAllInvoices.outputs;

    getAllInvoices
      .on(SUCCESS, (invoices) => {
        res
          .status(Status.OK)
          .json(invoices.map(invoiceSerializer.serialize));
      })
      .on(ERROR, next);

      getAllInvoices.execute();
  },

  getAllByStatus(req, res, next) {
    const { getAllInvoicesByStatus, invoiceSerializer } = req;
    const { SUCCESS, ERROR } = getAllInvoicesByStatus.outputs;

    getAllInvoicesByStatus
      .on(SUCCESS, (invoices) => {
        res
          .status(Status.OK)
          .json(invoices.map(invoiceSerializer.serialize));
      })
      .on(ERROR, next);

    getAllInvoicesByStatus.execute(String(req.params.status));
  },

  show(req, res, next) {
    const { getInvoice, invoiceSerializer } = req;

    const { SUCCESS, ERROR, NOT_FOUND } = getInvoice.outputs;

    getInvoice
      .on(SUCCESS, (invoice) => {
        res
          .status(Status.OK)
          .json(invoiceSerializer.serialize(invoice));
      })
      .on(NOT_FOUND, (error) => {
        res.status(Status.NOT_FOUND).json({
          type: 'NotFoundError',
          details: error.details
        });
      })
      .on(ERROR, next);

    getInvoice.execute(Number(req.params.id));
  },

  approve(req, res, next) {
    const { approveInvoice, invoiceSerializer } = req;

    const { SUCCESS, ERROR, NOT_FOUND } = approveInvoice.outputs;

    approveInvoice
      .on(SUCCESS, (invoices) => {
        res
          .status(Status.OK)
          .json(invoices.map(invoiceSerializer.serialize));
      })
      .on(NOT_FOUND, (error) => {
        res.status(Status.NOT_FOUND).json({
          type: 'NotFoundError',
          details: error.details
        });
      })
      .on(ERROR, next);

    approveInvoice.execute(Number(req.params.id));
  },

  create(req, res, next) {
    const { createInvoice } = req;
    const { SUCCESS, ERROR, VALIDATION_ERROR } = createInvoice.outputs;

    createInvoice
      .on(SUCCESS, (invoice) => {
        res
          .status(Status.CREATED)
          .json({"message": "invoice submitted successfully"});
      })
      .on(VALIDATION_ERROR, (error) => {
        res.status(Status.BAD_REQUEST).json({
          type: 'ValidationError',
          details: error.details
        });
      })
      .on(ERROR, next);

    createInvoice.execute(req.body);
  },

  update(req, res, next) {
    const { updateInvoice, invoiceSerializer } = req;
    const { SUCCESS, ERROR, VALIDATION_ERROR, NOT_FOUND } = updateInvoice.outputs;

    updateInvoice
      .on(SUCCESS, (invoice) => {
        res
          .status(Status.ACCEPTED)
          .json(invoiceSerializer.serialize(invoice));
      })
      .on(VALIDATION_ERROR, (error) => {
        res.status(Status.BAD_REQUEST).json({
          type: 'ValidationError',
          details: error.details
        });
      })
      .on(NOT_FOUND, (error) => {
        res.status(Status.NOT_FOUND).json({
          type: 'NotFoundError',
          details: error.details
        });
      })
      .on(ERROR, next);

    updateInvoice.execute(Number(req.params.id), req.body);
  },

  delete(req, res, next) {
    const { deleteInvoice } = req;
    const { SUCCESS, ERROR,  NOT_FOUND } = deleteInvoice.outputs;

    deleteInvoice
      .on(SUCCESS, () => {
        res.status(Status.ACCEPTED).end();
      })
      .on(NOT_FOUND, (error) => {
        res.status(Status.NOT_FOUND).json({
          type: 'NotFoundError',
          details: error.details
        });
      })
      .on(ERROR, next);

    deleteInvoice.execute(Number(req.params.id));
  }
};

module.exports = InvoicesController;
