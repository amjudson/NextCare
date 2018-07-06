import {results} from './fetchApi';

class invoiceApi {
  static getAllInvoices() {
    return results(`${process.env.API_HOST}/api/Invoice`, 'GET', 'Invoice').then(invoices => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], invoices));
      });
    });
  }

  static getInvoiceById(invoiceId) {
    return results(`${process.env.API_HOST}/api/Invoice/${invoiceId}`, 'GET', 'Invoice')
      .then(invoice => {
        return new Promise((resolve, reject) => {
          resolve(invoice);
        });
      });
  }

  static saveInvoice(invoice) {
    invoice = Object.assign({}, invoice); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const mininvoiceNameLength = 2;
      if (invoice.invoiceId) {
        results(`${process.env.API_HOST}/api/Invoice/${invoice.invoiceId}`, 'PUT', 'Invoice', invoice)
          .then((invoice) => {
            resolve(invoice);
          });
      } else {
        results(`${process.env.API_HOST}/api/Invoice`, 'POST', 'Invoice', invoice).then((invoice) => {
          resolve(invoice);
        });
      }
    });
  }

  static deleteInvoice(invoice) {
    return new Promise((resolve, reject) => {
      results(`${process.env.API_HOST}/api/Invoice/${invoice.invoiceId}`, 'DELETE', 'Invoice', invoice);
      resolve();
    });
  }
}

export default invoiceApi;
