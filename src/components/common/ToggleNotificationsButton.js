

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ToggleNotificationsButton extends Component {
  constructor(props){
    super(props);
    
  }

  render() {
    const toggleNotifications = this.props.toggleNotifications;
    const toggleNotificationsMenu = this.props.toggleNotificationsMenu;
    return (
      <div className = 'ToggleNotificationsButton'>
        <button className="nav-link"
          onClick={toggleNotificationsMenu}>
            <i className="far fa-bell"></i>
        </button>
      </div>
    );
  }
}

ToggleNotificationsButton.propTypes = {
    toggleNotifications: PropTypes.string.isRequired
};

export default ToggleNotificationsButton;
