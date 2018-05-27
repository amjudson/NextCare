import { getPayload } from './callApi';

class AcademyApi {
  static getAllAcademies() {
    return getPayload('http://localhost/MartialArts/api/academy', 'GET', 'Academy').then(academies => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], academies));
      }).catch((e) => console.log('Error:', e.message));
    });
  }

  static getAcademyById(academyId) {
    return getPayload(`http://localhost/MartialArts/api/academy/${academyId}`, 'GET', 'Academy').then(academy => {
      return new Promise((resolve, reject) => {
        resolve(academy);
      });
    });
  }

  static saveAcademy(academy) {
    academy = Object.assign({}, academy); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minacademyNameLength = 5;
      if (academy.name.length < minacademyNameLength) {
        reject(`Name must be at least ${minacademyNameLength} characters.`);
      }

      if (academy.description.length < minacademyNameLength) {
        reject(`Description must be at least ${minacademyNameLength} characters.`);
      }

      if (academy.academyId) {
        getPayload(`http://localhost/MartialArts/api/academy/${academy.academyId}`, 'PUT', 'Academy', academy).then((academy) => {
          resolve(academy);
        });
      } else {
        getPayload(`http://localhost/MartialArts/api/academy`, 'POST', 'Academy', academy).then((academy) => {
          resolve(academy);
        });
      }
    });
  }

  static deleteAcademy(academy) {
    return new Promise((resolve, reject) => {
      getPayload(`http://localhost/MartialArts/api/academy/${academy.academyId}`, 'DELETE', 'Academy', academy.academyId);
        resolve();
    });
  }
}

export default AcademyApi;
