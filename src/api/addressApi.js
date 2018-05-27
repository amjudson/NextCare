const getAddressByIdApi = (addressId) => {
  const url = `http://localhost/MartialArts/api/address/${addressId}`;
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
      throw new Error('Address by id response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const getAddressApi = () => {
  const url = 'http://localhost/MartialArts/api/address';
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
      throw new Error('Address response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const putAddressApi = (address) => {
  const url = `http://localhost/MartialArts/api/address/${address.addressId}`;
  return fetch(url, {
    mode: 'cors',
    method: 'PUT',
    body: JSON.stringify(address),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Address response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const deleteAddressApi = (addressId) => {
  const url = `http://localhost/MartialArts/api/Address/${addressId}`;
  return fetch(url, {
    mode: 'cors',
    method: 'DELETE',
    body: JSON.stringify(addressId),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Address response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const postAddressApi = (address) => {
  const url = 'http://localhost/MartialArts/api/address';
  return fetch(url, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(address),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Address response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

class AddressApi {
  static getAllAddresses() {
    return getAddressApi().then(addresses => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], addresses));
      });
    });
  }

  static getAddressById(addressId) {
    return getAddressByIdApi(addressId).then(address => {
      return new Promise((resolve, reject) => {
        resolve(address);
      });
    });
  }

  static saveAddress(address) {
    address = Object.assign({}, address); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minaddressNameLength = 5;
      if (address.addressLine1.length < minaddressNameLength) {
        reject(`Address line one must be at least ${minaddressNameLength} characters.`);
      }

      if (address.city.length < minaddressNameLength) {
        reject(`City must be at least ${minaddressNameLength} characters.`);
      }

      if (address.zip.length < minaddressNameLength) {
        reject(`Zip must be at least ${minaddressNameLength} characters.`);
      }

      if (address.addressId) {
        putAddressApi(address).then((address) => {
          resolve(address);
        });
      } else {
        postAddressApi(address).then((address) => {
          resolve(address);
        });
      }
    });
  }

  static deleteAddress(address) {
    return new Promise((resolve, reject) => {
      deleteAddressApi(address.addressId);
      resolve();
    });
  }
}

export default AddressApi;

