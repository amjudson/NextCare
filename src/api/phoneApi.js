import { getPayload } from './callApi';

class PhoneApi {
  static getAllPhones() {
    return getPayload('http://localhost/MartialArts/api/Phone', 'GET', 'Phone').then(phones => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], phones));
      });
    });
  }

  static getPhoneById(phoneId) {
    return getPayload(`http://localhost/MartialArts/api/Phone/${phoneId}`, 'GET', 'Phone')
      .then(phone => {
        return new Promise((resolve, reject) => {
          resolve(phone);
        });
      });
  }

  static savePhone(phone) {
    phone = Object.assign({}, phone); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minphoneNameLength = 7;
      if (phone.phoneNumber.length < minphoneNameLength) {
        reject(`Phone Number must be at least ${minphoneNameLength} characters.`);
      }

      if (phone.phoneId) {
        getPayload(`http://localhost/MartialArts/api/Phone/${phone.phoneId}`, 'PUT', 'Phone', phone)
          .then((phone) => {
            resolve(phone);
          });
      } else {
        getPayload('ttp://localhost/MartialArts/api/Phone', 'POST', 'Phone', phone).then((phone) => {
          resolve(phone);
        });
      }
    });
  }

  static deletePhone(phone) {
    return new Promise((resolve, reject) => {
      getPayload(`http://localhost/MartialArts/api/Phone/${phone.phoneId}`, 'PUT', 'Phone', phone);
      resolve();
    });
  }
}

export default PhoneApi;

