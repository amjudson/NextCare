import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import CommonButton from '../common/CommonButton';

const InvoiceListRow = ({ invoice }) => {
  return (
    <Link className="list-group-item list-group-item-action list-group-item-info flex-column align-items-start"
      to={'/invoice/' + invoice.invoiceId}>
        <div className = "row">
          <div className="col-sm-2">{invoice.invoiceId}</div>
          <div className="col-md-10">{invoice.title}</div>
        </div>
      </Link>
  );
};

InvoiceListRow.propTypes = {
  invoice: PropTypes.object.isRequired
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
