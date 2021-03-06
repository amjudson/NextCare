import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import CommonButton from '../common/CommonButton';

class InvoiceListRow extends Component {
  render()
   {
    const totalInvoice = this.props.totalInvoice;
    return (
      <Link className="list-group-item list-group-item-action flex-column align-items-start" to={'/invoice/' + totalInvoice.invoiceId}>
        <div className="row">
          <div className="col-sm-2">{totalInvoice.invoiceId}</div>
          <div className="col-md-10">{totalInvoice.description}</div>
        </div>
      </Link>
    );
  }
}

InvoiceListRow.propTypes = {
  totalInvoice: PropTypes.object.isRequired
};

export default InvoiceListRow;

/*
      <td>
        <button
          className="btn btn-primary"
          name="DeleteButton"
          content="Delete"
          onClick={clickIt}>
          Delete
        </button>
        </td>
*/
