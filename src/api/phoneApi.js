import {payload, results} from './fetchApi';

class PhoneApi {
  static getAllPhones() {
    return results(`${process.env.API_HOST}/api/Phone`, 'GET').then(phones => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], phones));
      });
    });
  }

  static getPhoneById(phoneId) {
    return results(`${process.env.API_HOST}/api/Phone/${phoneId}`, 'GET')
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
        results(`${process.env.API_HOST}/api/Phone/${phone.phoneId}`, 'PUT')
          .then((phone) => {
            resolve(phone);
          });
      } else {
        results(`${process.env.API_HOST}/api/Phone`, 'POST').then((phone) => {
          resolve(phone);
        });
      }
    });
  }

  static deletePhone(phone) {
    return new Promise((resolve, reject) => {
      results(`${process.env.API_HOST}/api/Phone/${phone.phoneId}`, 'PUT');
      resolve();
    });
  }
}

export default PhoneApi;

