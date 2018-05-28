import React from 'react';
import PropTypes from 'prop-types';
import AccountListRow from './AccountListRow';
import toastr from 'toastr';

const AccountList = ({ accounts }) => {
  return (
    <div className="col-md-12">
     <div className="list-group">  
        {accounts.map(account =>
          <AccountListRow key={account.accountId}
            account={account} />
        )}
      </div>
    </div>

  );
};

AccountList.propTypes = {
  accounts: PropTypes.array.isRequired
};

export default AccountList;
