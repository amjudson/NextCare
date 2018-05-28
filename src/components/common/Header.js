import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = function ({loading}) {
 return (
  <header className="app-header navbar">
  <button className="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#">
    NextCare
  </a>
  <button className="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
    <span className="navbar-toggler-icon"></span>
  </button>
  <ul className="nav navbar-nav d-md-down-none">
    <li className="nav-item px-3">
      <a className="nav-link" href="#">Dashboard</a>
    </li>
    <li className="nav-item px-3">
      <a className="nav-link" href="#">Users</a>
    </li>
    <li className="nav-item px-3">
      <a className="nav-link" href="#">Settings</a>
    </li>
  </ul>
  <ul className="nav navbar-nav ml-auto">
    <li className="nav-item d-md-down-none">
      <a className="nav-link" href="#">
        <i className="icon-bell"></i>
        <span className="badge badge-pill badge-danger">5</span>
      </a>
    </li>
    <li className="nav-item d-md-down-none">
      <a className="nav-link" href="#">
        <i className="icon-list"></i>
      </a>
    </li>
    <li className="nav-item d-md-down-none">
      <a className="nav-link" href="#">
        <i className="icon-location-pin"></i>
      </a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
        <img className="img-avatar" src="img/avatars/6.jpg" alt="admin@bootstrapmaster.com"></img>
      </a>
      <div className="dropdown-menu dropdown-menu-right">
        <div className="dropdown-header text-center">
          <strong>Account</strong>
        </div>
        <a className="dropdown-item" href="#">
          <i className="fa fa-bell-o"></i> Updates
          <span className="badge badge-info">42</span>
        </a>
        <a className="dropdown-item" href="#">
          <i className="fa fa-envelope-o"></i> Messages
          <span className="badge badge-success">42</span>
        </a>
        <a className="dropdown-item" href="#">
          <i className="fa fa-tasks"></i> Tasks
          <span className="badge badge-danger">42</span>
        </a>
        <a className="dropdown-item" href="#">
          <i className="fa fa-comments"></i> Comments
          <span className="badge badge-warning">42</span>
        </a>
        <div className="dropdown-header text-center">
          <strong>Settings</strong>
        </div>
        <a className="dropdown-item" href="#">
          <i className="fa fa-user"></i> Profile</a>
        <a className="dropdown-item" href="#">
          <i className="fa fa-wrench"></i> Settings</a>
        <a className="dropdown-item" href="#">
          <i className="fa fa-usd"></i> Payments
          <span className="badge badge-secondary">42</span>
        </a>
        <a className="dropdown-item" href="#">
          <i className="fa fa-file"></i> Projects
          <span className="badge badge-primary">42</span>
        </a>
        <div className="divider"></div>
        <a className="dropdown-item" href="#">
          <i className="fa fa-shield"></i> Lock Account</a>
        <a className="dropdown-item" href="#">
          <i className="fa fa-lock"></i> Logout</a>
      </div>
    </li>
  </ul>
  <button className="navbar-toggler aside-menu-toggler d-md-down-none" type="button" data-toggle="aside-menu-lg-show">
    <span className="navbar-toggler-icon"></span>
  </button>
  <button className="navbar-toggler aside-menu-toggler d-lg-none" type="button" data-toggle="aside-menu-show">
    <span className="navbar-toggler-icon"></span>
  </button>
</header>

  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;

/*
      <ul classNameName="no-bullets">
        <li><IndexLink to="/" activeclassNameName="active">Home</IndexLink></li>
        <li><Link to="/accounts" activeclassNameName="active">Accounts</Link></li>
        <li><Link to="/about" activeclassNameName="active">About</Link></li>
      </ul>
      {" | "}
      <Link to="/courses" activeclassNameName="active">Courses</Link>
*/
