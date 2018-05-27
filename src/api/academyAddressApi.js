import {getPayload} from './callApi';

const getAcademyAddressApi = (academyAddressId) => {
  const url = `http://localhost/MartialArts/api/AcademyAddress/${academyAddressId}`;
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
      throw new Error('AcademyAddress response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

class AcademyAddressApi {
  static getAcademyAddresses(academyId) {
    return getAcademyAddressApi(academyId).then(academyAddresses => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], academyAddresses));
      });
    });
  }
}

export default AcademyAddressApi;

//     const test = getPayload(`http://localhost/MartialArts/api/AcademyAddress/${academyId}`, 'GET', 'Academy Addresses').then(academyAddresses => {
// .then((academyAddresses) => {return Object.assign([], academyAddresses)}; )
// .then((data) => {return data;})
