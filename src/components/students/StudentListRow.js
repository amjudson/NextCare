import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

function getRankDesc(ranks, rankId) {
  //console.log('RANKS:', ranks);
  let filteredRank = {
    rankId: 0,
    abbreviation: '',
    description: '',
    priority: 0,
    grouping: 0,
    academyId: 0
  };
  const filteredRanks = ranks.filter(r => r.rankId == rankId);
  if (filteredRanks.length > 0) {
    filteredRank = filteredRanks[0];
    return filteredRank.description;
  }
  return 'Rank Not Found';
}

function getPhoneNumber(phones, id) {
  const phoneNum = { number: null, phoneTypeId: 0, phoneId: 0 };
  const phoneNums = phones.filter(r => r.phoneId == id);
  if (phoneNums.length > 0) {
    return phoneNums[0];
  }
  return phoneNum;
}

function phoneText(phone) {
  if (phone.number !== null) {
  return (`Id: ${phone.phoneId} Number: ${phone.number}`);
  }
  return 'Phone number missing';
}

const StudentListRow = ({ student, ranks, phones }) => {
  return (
    <Link className="row row-detail" to={'/student/' + student.studentId} style={{ textDecoration: 'none' }}>
      <div className="col-sm-1 item-detail">{student.studentId}</div>
      <div className="col-sm-2 item-detail">{student.lastName}</div>
      <div className="col-sm-2 item-detail">{student.firstName}</div>
      <div className="col-sm-2 item-detail">{getRankDesc(ranks, student.rankId)}</div>
      <div className="col-sm-5 item-detail">{phoneText(getPhoneNumber(phones, student.phoneId))}</div>
    </Link>
  );
};

StudentListRow.propTypes = {
  student: PropTypes.object.isRequired,
  ranks: PropTypes.array.isRequired,
  phones: PropTypes.array.isRequired
};

export default StudentListRow;
