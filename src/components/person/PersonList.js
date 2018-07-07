import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PersonListRow from './PersonListRow';

class PersonList extends Component {
  render() {
    const {personCompletes} = this.props;
    return (
      <div className="col-md-12">
        <div className="tableHeader">
          
          <div className="col-sm-2">Last Name</div>
          <div className="col-sm-2">First Name</div>
          <div className="col-sm-2">MI</div>
          <div className="col-sm-2">Grade Level</div>
          <div className="col-sm-2">Phone Number</div>
          <div className="col-sm-2">Insurance</div>
        </div>
        <div className="list-group">
        {personCompletes.map(personComplete =>
          <PersonListRow key={personComplete.person.personId} personComplete={personComplete} />
          )}
        </div>
      </div>
    );
  }
}

PersonList.propTypes = {
  personCompletes: PropTypes.array.isRequired
};

export default PersonList;
