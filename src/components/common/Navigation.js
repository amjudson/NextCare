import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import ToggleNavMinimizeButton from './ToggleNavMinimizeButton';
class Navigation extends Component {

  constructor(props) {
    super(props)
    this.state=
    {
      textCollapse: 'nav-link collapseNavText'
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    var css = (this.props.showHideSidenav === "nav-menu-minimized") ? "nav-menu-minimized" : "sidebar-minimized";
    document.body.classList.toggle(css);
    //const textCollapse = this.props.textCollapse;
    //console.log(textCollapse);
    this.state.textCollapse === "nav-link collapseNavText" ? this.setState({textCollapse: "nav-link openNavText"}) : this.setState({textCollapse: "nav-link collapseNavText"});
      
    console.log(this.state.textCollapse);
  }
  render() {
    const loading = this.props.loading;

    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <IndexLink to="/" className={this.state.textCollapse}><i className="fas fa-home"></i> Home </IndexLink>
            </li>
            <li className="nav-item">
              <Link to="/accounts" className="nav-link"><i className="far fa-address-card"></i> Accounts</Link>
            </li>
            <li className="nav-item">
              <Link to="/invoices" className="nav-link"><i className="fas fa-file-alt"></i> Invoices </Link>
            </li>
            <li className="nav-item">
              <Link to="/persons" className="nav-link"><i className="fas fa-user"></i> Persons </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link"><i className="fas fa-envelope-square"></i> Messages </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link"><i className="fas fa-seedling"></i> Room Feeds </Link>
            </li>
          </ul>
          {loading && <LoadingDots interval={100} dots={20} />}
        </nav>
        <ToggleNavMinimizeButton  textCollapse = {this.state.textCollapse} toggleMenu = {this.toggleMenu} />
      </div>
    );
  }
}

Navigation.propTypes = {
  loading: PropTypes.bool.isRequired,
  textCollapse: PropTypes.string
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
