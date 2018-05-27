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
    <Link className="row row-detail" to={'/invoice/' + invoice.invoiceId}>
      <div className="col-sm-1 item-detail">{invoice.invoiceId}</div>
      <div className="col-md-4 item-detail">{invoice.owner.lname}, {invoice.owner.fname}</div>
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
