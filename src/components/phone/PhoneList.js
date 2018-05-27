import React from 'react';
import PropTypes from 'prop-types';
import PhoneListRow from './PhoneListRow';

const PhoneList = ({ phones }) => {
  return (
    <div className="container-fluid">
      <div className="row row-title">
        <div className="col-sm-1">ID</div>
        <div className="col-sm-2">Phone Number</div>
        <div className="col-sm-2">Extension</div>
      </div>
         {phones.map(phone =>
          <PhoneListRow key={phone.phoneId} phone={phone}/>
          )}
    </div>
    );
};

PhoneList.propTypes = {
  phones: PropTypes.array.isRequired
};

export default PhoneList;
