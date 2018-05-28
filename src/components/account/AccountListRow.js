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

const AccountListRow = ({ account }) => {
  return (
          <Link className="list-group-item list-group-item-action list-group-item-primary flex-column align-items-start" to={'/account/' + account.accountId}>
          <div className = "row">
            <div className="col-md-6">{account.accountId}</div>
            <div className="col-md-6">{account.owner.lname}, {account.owner.fname}</div>
          </div>
          </Link>
  );
};

AccountListRow.propTypes = {
  account: PropTypes.object.isRequired
};

export default AccountListRow;

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
