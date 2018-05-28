import React from 'react';
import PropTypes from 'prop-types';
import InvoiceItemListRow from './InvoiceItemListRow';
import toastr from 'toastr';

const InvoiceList = ({invoice}) => {
  return (
    <div className="container-fluid">
      <div className="row row-title">
        <div className="col-lg-2">Item</div>
        <div className="col-sm-2">Quantity</div>
        <div className="col-sm-2">Cost Per</div>
      </div>
      {invoice.lineItems.map(line =>
        <InvoiceItemListRow key={line.itemId} line={line} />
      )}
    </div>
  );
};

InvoiceList.propTypes = {
  invoice: PropTypes.object.isRequired
};

export default InvoiceList;
