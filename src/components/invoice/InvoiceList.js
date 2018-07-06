import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InvoiceListRow from './InvoiceListRow';
import toastr from 'toastr';

class InvoiceList extends Component {
  render() {
    const totalInvoices = this.props.totalInvoices;
    return (
      <div className="col-md-12">
        <div className="tableHeader">
          <div className="col-sm-2">
            Customer ID
          </div>
          <div className="col-md-10">
            Customer Name
          </div>
        </div>
        <div className="list-group">
          {totalInvoices.map(totalInvoice =>
            <InvoiceListRow key={totalInvoice.invoiceId}
              totalInvoice={totalInvoice} />
          )}
        </div>
      </div>
    );
  }
}

InvoiceList.propTypes = {
  totalInvoices: PropTypes.array.isRequired
};

export default InvoiceList;
