import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import CommonButton from '../common/CommonButton';

const clickIt = () => {
  alert('I wish I could delete.');
};

const handleOnClick = (invoiceId) => {
  alert('I wish I could click this.', invoiceId);
};

const InvoiceListRow = ({ invoice }) => {
  return (  
      <Link className="list-group-item list-group-item-action flex-column align-items-start" to={'/invoice/' + invoice.invoiceId}>
        <div className = "row">
          <div className="col-md-6">{invoice.invoiceId}</div>
          <div className="col-md-6">{invoice.title}</div>
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
