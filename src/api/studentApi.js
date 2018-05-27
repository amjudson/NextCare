import { getPayload } from './callApi';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
//This would be performed on the server in a real app. Just stubbing in.
const generateId = (students) => {
  return Math.max.apply(Math, students.map((s) => {
    return s.id;
  })) + 1;
};

const getAllStudentsApi = () => {
  const url = 'http://localhost/MartialArts/api/Student';
  return fetch(url, {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Student response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const putStudent = (student) => {
  const url = 'http://localhost/MartialArts/api/Student';
  return fetch(url, {
    mode: 'cors',
    method: 'PUT',
    body: JSON.stringify(student),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Student response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const postStudent = (student) => {
  const url = 'http://localhost/MartialArts/api/Student';
  return fetch(url, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(student),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Student response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const deleteStudentApi = (studentId) => {
  const url = `http://localhost/MartialArts/api/Student/${studentId}`;
  return fetch(url, {
    mode: 'cors',
    method: 'DELETE',
    body: JSON.stringify(studentId),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Student response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const students =
  getAllStudentsApi().then(students => {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], students));
    });
  });

class studentApi {
  static getAllStudents() {
    return getPayload('http://localhost/MartialArts/api/Student', 'GET', 'Student').then(students => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], students));
      });
    });
  }

  static getStudentById(studentId) {
    return getPayload(`http://localhost/MartialArts/api/Student/${studentId}`, 'GET', 'Student').then(student => {
      return new Promise((resolve, reject) => {
        resolve(student);
      });
    });
  }

  static saveStudent(student) {
    student = Object.assign({}, student); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minstudentNameLength = 3;
      if (student.firstName.length < minstudentNameLength) {
        reject(`First Name must be at least ${minstudentNameLength} characters.`);
      }

      if (student.lastName.length < minstudentNameLength) {
        reject(`Last Name must be at least ${minstudentNameLength} characters.`);
      }

      if (student.rankId <= 0) {
        reject('No Rank has been selected.');
      }

      if (student.studentId) {
        getPayload(`http://localhost/MartialArts/api/Student/${student.studentId}`, 'PUT', 'Student', student).then((student) => {
          resolve(student);
        }).catch((message) => console.log('Student ERROR:', message));
      } else {
        getPayload(`http://localhost/MartialArts/api/Student`, 'POST', 'Student', student).then((student) => {
          resolve(student);
        }).catch((message) => console.log('Student ERROR:', message));
      }
    });
  }

  static deleteStudent(student) {
    return new Promise((resolve, reject) => {
      getPayload(`http://localhost/MartialArts/api/student/${student.studentId}`, 'DELETE', 'Academy', student.studentId);
      resolve();
    });
  }
}

export default studentApi;

