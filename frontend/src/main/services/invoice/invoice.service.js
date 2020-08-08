import config from '../config';
import axios from 'axios';

export const invoiceService = {
    getAllInvoicesByStatus,
};


function getAllInvoicesByStatus(id) {
    return axios.get(`${config.localApi}/invoice/approval/${id}`)
         .then(function (response) {
         // handle success
         return response;
         })
         .catch(function (error) {
         // handle error
         console.log(error);
    });
}