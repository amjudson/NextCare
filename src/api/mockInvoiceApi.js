import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const invoices = [
  {
    invoiceId: 1,
    owner: {
      lname: 'Smith',
      fname: 'James'
    },
    address: {
      addressLine1: '123 Raining Blvd',
      addressLine2: '',
      stateId: 1,
      city: 'Remlap',
      zip: '11111'
    },
    phones: [
      {
        number: '850-555-1212',
        type: 'Cell',
        isPrimary: true
      },
      {
        number: '850-555-1212',
        type: 'Cell',
        isPrimary: true
      }
   ],
    emails: [
      {
      address: 'joe.smith@email.com',
      type: 'Home',
      isPrimary: true
      }
    ],
    students: [
       {
        fname: 'Jane',
        lname: 'Smith',
        age: 6,
        sex: 'F'
      },
      {
        fname: 'Mark',
        lname: 'Smith',
        age: 4,
        sex: 'M'
      }
    ]
  },
  {
    invoiceId: 2,
    owner: {
      lname: 'Jones',
      fname: 'Peter'
    },
    address: {
      addressLine1: '999 Anyway St',
      addressLine2: '',
      stateId: 16,
      city: 'Small Town',
      zip: '22222'
    },
    phones: [
      {
        number: '850-555-1212',
        type: 'Cell',
        isPrimary: true
      }
    ],
    emails: [
      {
        address: 'joe.smith@email.com',
        type: 'Home',
        isPrimary: true
      }
    ],
    students: [
      {
        fname: 'Sam',
        lname: 'Jones',
        age: 4,
        sex: 'M'
      }
    ]
  },
  {
    invoiceId: 3,
    owner: {
      lname: 'Collins',
      fname: 'Jane'
    },
    address: {
      addressLine1: '88 Pair Ave N',
      addressLine2: '',
      stateId: 1,
      city: 'St Paul',
      zip: '33333'
    },
    phones: [
      {
        number: '850-555-1212',
        type: 'Cell',
        isPrimary: true
      }
    ],
    emails: [
      {
        address: 'joe.smith@email.com',
        type: 'Work',
        isPrimary: true
      }
    ],
    students: [
     {
        fname: 'Pam',
        lname: 'Collins',
        age: 5,
        sex: 'F'
      }
    ]
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (invoices) => {
  return Math.max.apply(Math, invoices.map((s) => { return s.invoiceId; })) + 1;
};

class invoiceApi {
  static getAllInvoices() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], invoices));
      }, delay);
    });
  }

  static saveInvoice(invoice) {
    invoice = Object.assign({}, invoice); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const mininvoiceNameLength = 3;
        if (invoice.line1.length < mininvoiceNameLength) {
          reject(`Ainvoice Line 1 must be at least ${mininvoiceNameLength} characters.`);
        }

        if (invoice.stateId <= 0) {
          reject('No State has been selected.');
        }
        //debugger;
        if (invoice.invoiceId) {
          const existinginvoiceIndex = invoices.findIndex(a => a.invoiceId === invoice.invoiceId);
          invoices.splice(existinginvoiceIndex, 1, invoice);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new invoices in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          invoice.invoiceId = generateId(invoices);
          invoices.push(invoice);
        }

        resolve(invoice);
      }, delay);
    });
  }

  static deleteInvoice(invoiceId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfaddresesToDelete = invoices.findIndex(invoice => {
          invoice.invoiceId == invoiceId;
        });
        invoices.splice(indexOfaddresesToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default invoiceApi;
