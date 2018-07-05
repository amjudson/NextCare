import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const persons = [
  {
    personId: 1,
    lastName: 'Smith',
    firstName: 'James',
    middleName: '',
    prefix: '',
    suffix: '',
    personTypeId: 1,
    socialSecurityNumber: '*****3456',
    ssnSalt: 'dhMbpF/3XtFA5g==',
    alias: 'Jim',
    sex: 'M',
    raceId: 2,
    dateOfBirth: '1990-03-02T00:00:00'
  },
  {
    personId: 2,
    lastName: 'Smith',
    firstName: 'Martha',
    middleName: '',
    prefix: '',
    suffix: '',
    personTypeId: 1,
    socialSecurityNumber: '*****8764',
    ssnSalt: 'gIthQGJ20P3UKw==',
    alias: 'Mary',
    sex: 'F',
    raceId: 2,
    dateOfBirth: '1993-07-12T00:00:00'
  },
  {
    personId: 3,
    lastName: 'Smith',
    firstName: 'John',
    middleName: '',
    prefix: '',
    suffix: '',
    personTypeId: 1,
    socialSecurityNumber: '*****2987',
    ssnSalt: 'wn4dBo6+02Ha6g==',
    alias: '',
    sex: 'M',
    raceId: 2,
    dateOfBirth: '2010-04-12T00:00:00'
  },
  {
    personId: 4,
    lastName: 'Smith',
    firstName: 'Michael',
    middleName: '',
    prefix: '',
    suffix: '',
    personTypeId: 1,
    socialSecurityNumber: '*****6453',
    ssnSalt: 'NbZemKbtJTKIYA==',
    alias: 'Mike',
    sex: 'M',
    raceId: 2,
    dateOfBirth: '2012-09-24T00:00:00'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (persons) => {
  return Math.max.apply(Math, persons.map((s) => { return s.personId; })) + 1;
};

class mockPersonApi {
  static getAllPersons() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], persons));
      }, delay);
    });
  }

  static savePerson(person) {
    person = Object.assign({}, person); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minpersonNameLength = 3;
        if (person.firstName.length < minpersonNameLength) {
          reject(`First name must be at least ${minpersonNameLength} characters.`);
        }

        if (person.lastName.length < minpersonNameLength) {
          reject(`Last name must be at least ${minpersonNameLength} characters.`);
        }

        //debugger;
        if (person.personId) {
          const existingpersonIndex = persons.findIndex(a => a.personId === person.personId);
          persons.splice(existingpersonIndex, 1, person);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new persons in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          person.personId = generateId(persons);
          persons.push(person);
        }

        resolve(person);
      }, delay);
    });
  }

  static deletePerson(personId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfaddresesToDelete = persons.findIndex(person => {
          person.personId == personId;
        });
        persons.splice(indexOfaddresesToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default mockPersonApi;
