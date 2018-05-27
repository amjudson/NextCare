import React from 'react';
import PropTypes from 'prop-types';
import AccountListRow from './AccountListRow';
import toastr from 'toastr';

const AccountList = ({ accounts }) => {
  return (
    <div className="container-fluid">
      <div className="row row-title">
          <div className="col-sm-1">ID</div>
          <div className="col-md-4">Owner</div>
      </div>
        {accounts.map(account =>
          <AccountListRow key={account.accountId}
            account={account} />
        )}
    </div>
  );
};

AccountList.propTypes = {
  accounts: PropTypes.array.isRequired
};

export default AccountList;
