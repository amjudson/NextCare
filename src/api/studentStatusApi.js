import { getPayload } from './callApi';

class StudentStatusApi {
  static getAllStudentStatuses() {
    return getPayload('http://localhost/MartialArts/api/StudentStatus', 'GET', 'Student Status').then(studentStatuses => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], studentStatuses));
      });
    });
  }

  static getStudentStatusById(studentStatusId) {
    return getPayload(`http://localhost/MartialArts/api/StudentStatus/${studentStatusId}`, 'GET', 'Student Status').then(studentStatus => {
      return new Promise((resolve, reject) => {
          resolve(studentStatus);
      });
    });
  }

  static saveStudentStatus(studentStatus) {
    studentStatus = Object.assign({}, studentStatus); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minstudentStatusNameLength = 5;
      if (studentStatus.description.length < minstudentStatusNameLength) {
        reject(`Description must be at least ${minstudentStatusNameLength} characters.`);
      }

      if (studentStatus.studentStatusId) {
        getPayload(`http://localhost/MartialArts/api/StudentStatus/${studentStatus.studentStatusId}`, 'PUT', 'Student Status', studentStatus)
          .then((studentStatus) => {
          resolve(studentStatus);
        });
      } else {
        getPayload('http://localhost/MartialArts/api/StudentStatus', 'POST', 'Student Status', studentStatus)
          .then((studentStatus) => {
          resolve(studentStatus);
        });
      }
    });
  }

  static deleteStudentStatus(studentStatus) {
    return new Promise((resolve, reject) => {
      getPayload(`http://localhost/MartialArts/api/StudentStatus/${studentStatus.studentStatusId}`, 'DELETE', 'Student Status');
      resolve();
    });
  }
}

export default StudentStatusApi;

