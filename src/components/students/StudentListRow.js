import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class StudentListRow extends Component {
  phoneText(phone) {
    if (phone.number !== null) {
    return (`Id: ${phone.phoneId} Number: ${phone.number}`);
    }
    return 'Phone number missing';
  }

  render() {
    const {student} = this.props;
    return (
      <Link className="row row-detail" to={'/student/' + student.studentId}>
        <div className="col-1 item-detail">{student.studentId}</div>
        <div className="col-sm-2 item-detail">{student.lastName}</div>
        <div className="col-sm-2 item-detail">{student.firstName}</div>
      </Link>
    );
  }
}

StudentListRow.propTypes = {
  student: PropTypes.object.isRequired,
  ranks: PropTypes.array.isRequired
};

export default StudentListRow;
