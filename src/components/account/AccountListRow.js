import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import * as actions from '../../actions/accountActions';
import CommonButton from '../common/CommonButton';

const clickIt = () => {
  alert('I wish I could delete.');
};

const handleOnClick = (accountId) => {
  alert('I wish I could click this.', accountId);
};

const AcademyListRow = ({ account }) => {
  return (
    <Link className="row row-detail" to={'/account/' + account.accountId}>
      <div className="col-sm-1 item-detail">{account.accountId}</div>
      <div className="col-md-4 item-detail">{account.owner.lname}, {account.owner.fname}</div>
    </Link>
  );
};

AcademyListRow.propTypes = {
  account: PropTypes.object.isRequired
};

export default AcademyListRow;

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
