import { combineReducers } from 'redux';
import students from './studentReducer';
import phones from './phoneReducer';
import accounts from './accountsReducer';
import states from './stateReducer';
import addresses from './addressesReducer';
import addressTypes from './addressTypeReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  students,
  phones,
  accounts,
  states,
  addresses,
  addressTypes,
  ajaxCallsInProgress
});

export default rootReducer;
