import { getPayload } from './callApi';

class StateApi {
  static getAllStates() {
    return getPayload('http://localhost/MartialArts/api/State', 'GET', 'State').then(states => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], states));
      });
    });
  }

  static getStateById(stateId) {
    return getPayload(`http://localhost/MartialArts/api/State/${stateId}`, 'GET', 'State')
      .then(state => {
        return new Promise((resolve, reject) => {
          resolve(state);
        });
      });
  }

  static saveState(state) {
    state = Object.assign({}, state); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minstateNameLength = 5;
      if (state.description.length < minstateNameLength) {
        reject(`Description must be at least ${minstateNameLength} characters.`);
      }

      if (state.stateId) {
        getPayload(`http://localhost/MartialArts/api/State/${state.stateId}`, 'PUT', 'State', state)
          .then((state) => {
            resolve(state);
          });
      } else {
        getPayload('ttp://localhost/MartialArts/api/State', 'POST', 'State', state).then((state) => {
          resolve(state);
        });
      }
    });
  }

  static deleteState(state) {
    return new Promise((resolve, reject) => {
      getPayload(`http://localhost/MartialArts/api/State/${state.stateId}`, 'PUT', 'State', state);
      resolve();
    });
  }
}

export default StateApi;

