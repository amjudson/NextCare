import { combineReducers } from 'redux';
import students from './studentReducer';
import phones from './phoneReducer';
import accounts from './accountsReducer';
import states from './stateReducer';
import addresses from './addressesReducer';
import addressTypes from './addressTypeReducer';
import invoices from './invoicesReducer';
import totalInvoices from './totalInvoicesReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import persons from './personReducer';

const rootReducer = combineReducers({
  students,
  phones,
  accounts,
  invoices,
  totalInvoices,
  states,
  addresses,
  addressTypes,
  persons,
  ajaxCallsInProgress
});

export default rootReducer;
