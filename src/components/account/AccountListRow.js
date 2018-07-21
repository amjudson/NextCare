import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import * as actions from '../../actions/accountActions';
import CommonButton from '../common/CommonButton';

class AccountListRow extends Component {
  render() {
    const account = this.props.account;
    return (
      <Link className="list-group-item list-group-item-action flex-column align-items-start" to={'/account/' + account.accountId}>
        <div className="row">
          <div className="col-md-2">{account.owner.lname}, </div>
          <div className="col-md-2">{account.owner.fname}</div>
        </div>
      </Link>
    );
  }
}

AccountListRow.propTypes = {
  account: PropTypes.object.isRequired
};

export default AccountListRow;
