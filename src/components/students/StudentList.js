import React from 'react';
import PropTypes from 'prop-types';
import StudentListRow from './StudentListRow';

const StudentList = ({ students, ranks, phones }) => {
  return (
    <div className="container-fluid">
      <div className="row row-title">
        <div className="col-sm-1">ID</div>
        <div className="col-sm-2">Last Name</div>
        <div className="col-sm-2">First Name</div>
        <div className="col-sm-2">Rank</div>
        <div className="col-sm-5">Phone Number</div>
      </div>
         {students.map(student =>
          <StudentListRow key={student.studentId} student={student} ranks={ranks} phones={phones}/>
          )}
    </div>
    );
};

StudentList.propTypes = {
  students: PropTypes.array.isRequired,
  ranks: PropTypes.array.isRequired,
  phones: PropTypes.array.isRequired
};

export default StudentList;
