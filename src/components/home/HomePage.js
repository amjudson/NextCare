import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h3>NextCARE</h3>
        <p>Customer service page.</p>
        <Link to="about" className="btn btn-info">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
