import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const PhoneListRow = ({ phone }) => {
  return (
    <Link className="row row-detail" to={'/phone/' + phone.phoneId}>
      <div className="col-sm-1 item-detail">{phone.phoneId}</div>
      <div className="col-sm-2 item-detail">{phone.phoneNumber}</div>
      <div className="col-sm-2 item-detail">{phone.extension}</div>
    </Link>
  );
};

PhoneListRow.propTypes = {
  phone: PropTypes.object.isRequired
};

export default PhoneListRow;
