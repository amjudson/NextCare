import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import ToggleAsideButton from './ToggleAsideButton';
import ToggleNavButton from './ToggleNavButton';
import ToggleNotificationsButton from './ToggleNotificationsButton';
import HeaderNotifications from './HeaderNotifications';
class Header extends PureComponent {

  constructor(props) {
    super(props)
    this.state=
    {
      toggleNotifications: 'dropdown-menu dropdown-menu-right dropdown-menu-lg'
    }
    this.toggleNotificationsMenu = this.toggleNotificationsMenu.bind(this);
  }

  toggleNotificationsMenu() {
   
    this.state.toggleNotifications === "dropdown-menu dropdown-menu-right dropdown-menu-lg" ? this.setState({toggleNotifications: "dropdown-menu dropdown-menu-right dropdown-menu-lg show"}) : this.setState({toggleNotifications: "dropdown-menu dropdown-menu-right dropdown-menu-lg"});   
   console.log(this.state.toggleNotifications);
  }


  render() {
    const loading = this.props.loading;

    return (
      <header className="app-header navbar">
        <button className="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">NextCare</a>
        <ToggleNavButton  />
      
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item d-md-down-none">
          <ToggleNotificationsButton  toggleNotifications = {this.state.toggleNotifications} toggleNotificationsMenu = {this.toggleNotificationsMenu} /> 
          <div className={this.state.toggleNotifications} >
            <HeaderNotifications />
          </div>  
          </li>
        </ul>
        <ToggleAsideButton  />
       
      </header>

    );
  }
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  toggleNotifications: PropTypes.string
};

export default Header;

/*
      <ul className="no-bullets">
        <li><IndexLink to="/" activeclassName="active">Home</IndexLink></li>
        <li><Link to="/accounts" activeclassName="active">Accounts</Link></li>
        <li><Link to="/about" activeclassName="active">About</Link></li>
      </ul>
      {" | "}
      <Link to="/courses" activeclassName="active">Courses</Link>
*/
