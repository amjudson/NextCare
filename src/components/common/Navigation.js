import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Navigation = function ({loading}) {
 return (
  <div className="sidebar">
    <nav className="sidebar-nav">
      <ul className="nav">
      {loading && <LoadingDots interval={100} dots={20} />}
        <li className="nav-item">
        <IndexLink to="/" className="nav-link">Home</IndexLink>
        </li>
        <li className="nav-item">
          <Link to="/accounts" className="nav-link">Accounts</Link>
        </li>
        <li className="nav-item">
          <Link to="/invoices" className="nav-link">Invoices</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">Messages</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">Room Feeds</Link>
        </li>
      </ul>
    </nav>
  </div>
 
  );
};

Navigation.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Navigation;

/*
      <ul className="no-bullets">
        <li><IndexLink to="/"className="active">Home</IndexLink></li>
        <li><Link to="/accounts"className="active">Accounts</Link></li>
        <li><Link to="/about"className="active">About</Link></li>
      </ul>
      {" | "}
      <Link to="/courses"className="active">Courses</Link>
*/
