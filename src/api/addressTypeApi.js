import {payload, results} from './fetchApi';

class AddressTypeApi {
  static getAllAddressTypes() {
    return results(`${process.env.API_HOST}/api/AddressType`).then(addressTypes => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], addressTypes));
      });
    });
  }

  static getAddressTypeById(addressTypeId) {
    return results(`${process.env.API_HOST}/api/AddressType/${addressTypeId}`)
      .then(addressType => {
      return new Promise((resolve, reject) => {
        resolve(addressType);
      });
    });
  }

  static saveAddressType(addressType) {
    addressType = Object.assign({}, addressType); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minaddressTypeNameLength = 5;
      if (addressType.description.length < minaddressTypeNameLength) {
        reject(`Description must be at least ${minaddressTypeNameLength} characters.`);
      }

      if (addressType.addressTypeId) {
        results(`${process.env.API_HOST}/api/AddressType/${addressType.addressTypeId}`, 'PUT')
          .then((addressType) => {
          resolve(addressType);
        });
      } else {
        results(`${process.env.API_HOST}/api/AddressType`, 'POST').then((addressType) => {
          resolve(addressType);
        });
      }
    });
  }

  static deleteAddressType(addressType) {
    return new Promise((resolve, reject) => {
      results(`${process.env.API_HOST}/api/AddressType/${addressType.addressTypeId}`, 'PUT');
      resolve();
    });
  }
}

export default AddressTypeApi;

