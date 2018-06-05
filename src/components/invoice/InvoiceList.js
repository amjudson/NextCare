import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InvoiceListRow from './InvoiceListRow';
import toastr from 'toastr';

class InvoiceList extends Component {
  render() {
    const invoices = this.props.invoices;
    return (
      <div className="col-md-12">
        <div className="list-group">
          {invoices.map(invoice =>
            <InvoiceListRow key={invoice.invoiceId}
              invoice={invoice} />
          )}
        </div>
      </div>
    );
  }
}

InvoiceList.propTypes = {
  invoices: PropTypes.array.isRequired
};

export default InvoiceList;
