import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class PersonListRow extends Component {

  render() {
    const {personComplete} = this.props;
    
    return (
      <Link className="list-group-item list-group-item-action flex-column align-items-start" to={'/person/' + personComplete.person.personId} style={{ textDecoration: 'none' }}>
        <div className="row">
          <div className="col-1">{personComplete.person.personId}</div>
          <div className="col-sm-2">{personComplete.person.lastName}</div>
          <div className="col-sm-2">{personComplete.person.firstName}</div>
        </div>
      </Link>
    );
  }
}

PersonListRow.propTypes = {
  personComplete: PropTypes.object.isRequired
};

export default PersonListRow;
