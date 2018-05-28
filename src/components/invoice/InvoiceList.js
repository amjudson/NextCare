import React from 'react';
import PropTypes from 'prop-types';
import InvoiceListRow from './InvoiceListRow';
import toastr from 'toastr';

const InvoiceList = ({ invoices }) => {
  return (
    <div className="container-fluid">
      <div className="row row-title">
          <div className="col-sm-1">ID</div>
          <div className="col-md-4">Title</div>
      </div>
        {invoices.map(invoice =>
          <InvoiceListRow key={invoice.invoiceId}
            invoice={invoice} />
        )}
    </div>
  );
};

InvoiceList.propTypes = {
  invoices: PropTypes.array.isRequired
};

export default InvoiceList;
