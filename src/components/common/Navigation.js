import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Navigation = function ({loading}) {
 return (
  <div className="col-sm-2 vertical-menu">
    <IndexLink to="/" activeClassName="active">Home</IndexLink>
    <Link to="/accounts" activeClassName="active">Accounts</Link>
    <Link to="/about" activeClassName="active">About</Link>
    <a href="#">Invoices</a>
    <a href="#">Messages</a>
    <a href="#">Room Feeds</a>
    {loading && <LoadingDots interval={100} dots={20} />}
  </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;

/*
      <ul className="no-bullets">
        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        <li><Link to="/accounts" activeClassName="active">Accounts</Link></li>
        <li><Link to="/about" activeClassName="active">About</Link></li>
      </ul>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
*/
