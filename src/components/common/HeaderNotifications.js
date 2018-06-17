

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HeaderNotifications extends Component {
  constructor(props){
    super(props);
    
  }

  render() {
    return (
    <div>
        <div className="dropdown-header text-center">
        <strong>You have 5 notifications</strong>
        </div>
        <a className="dropdown-item" href="#">
            <i className="icon-user-follow text-success"></i> New user registered
        </a>
        <a className="dropdown-item" href="#">
            <i className="icon-user-unfollow text-danger"></i> User deleted
        </a>

        <a className="dropdown-item" href="#">
            <div className="text-uppercase mb-1">
            <small>
                <b>CPU Usage</b>
            </small>
            </div>
            <span className="progress progress-xs">
            <div className="progress-bar bg-info" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </span>
            <small className="text-muted">348 Processes. 1/4 Cores.</small>
        </a> 
    </div>
    );
  }
}

HeaderNotifications.propTypes = {
    
};

export default HeaderNotifications;



                