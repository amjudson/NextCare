import keyMirror from 'keymirror';

const action = keyMirror({
  // ajax calls
  BEGIN_AJAX_CALL: null,
  AJAX_CALL_ERROR: null,

  // course actions
  LOAD_COURSES_SUCCESS: null,
  CREATE_COURSE_SUCCESS: null,
  UPDATE_COURSE_SUCCESS: null,

  // author actions
  LOAD_AUTHORS_SUCCESS: null,

  // rank actions
  LOAD_RANKS_SUCCESS: null,
  LOAD_RANKS_FAILED: null,
  LOAD_RANK_SUCCESS: null,
  LOAD_RANK_FAILED: null,
  CREATE_RANK_SUCCESS: null,
  CREATE_RANK_FAILED: null,
  UPDATE_RANK_SUCCESS: null,
  UPDATE_RANK_FAILED: null,
  DELETE_RANK_SUCCESS: null,
  DELETE_RANK_FAILED: null,

  // phone actions
  LOAD_PHONES_SUCCESS: null,
  LOAD_PHONES_FAILED: null,
  CREATE_PHONE_SUCCESS: null,
  CREATE_PHONE_FAILED: null,
  UPDATE_PHONE_SUCCESS: null,
  UPDATE_PHONE_FAILED: null,

  // student actions
  LOAD_STUDENTS_SUCCESS: null,
  LOAD_STUDENTS_FAILED: null,
  CREATE_STUDENT_SUCCESS: null,
  UPDATE_STUDENT_SUCCESS: null,
  CREATE_STUDENT_FAILED: null,
  UPDATE_STUDENT_FAILED: null,

  // account actions
  LOAD_ACCOUNTS_SUCCESS: null,
  LOAD_ACCOUNTS_FAILED: null,
  LOAD_ACCOUNT_SUCCESS: null,
  LOAD_ACCOUNT_FAILED: null,
  CREATE_ACCOUNT_SUCCESS: null,
  UPDATE_ACCOUNT_SUCCESS: null,
  CREATE_ACCOUNT_FAILED: null,
  UPDATE_ACCOUNT_FAILED: null,
  DELETE_ACCOUNT_SUCCESS: null,
  DELETE_ACCOUNT_FAILED: null,

  // invoice actions
  LOAD_INVOICES_SUCCESS: null,
  LOAD_INVOICES_FAILED: null,
  LOAD_INVOICE_SUCCESS: null,
  LOAD_INVOICE_FAILED: null,
  CREATE_INVOICE_SUCCESS: null,
  UPDATE_INVOICE_SUCCESS: null,
  CREATE_INVOICE_FAILED: null,
  UPDATE_INVOICE_FAILED: null,
  DELETE_INVOICE_SUCCESS: null,
  DELETE_INVOICE_FAILED: null,

  // state actions
  LOAD_STATES_SUCCESS: null,
  LOAD_STATES_FAILED: null,

  // address actions
  LOAD_ADDRESSES_SUCCESS: null,
  LOAD_ADDRESSES_FAILED: null,
  CREATE_ADDRESS_SUCCESS: null,
  UPDATE_ADDRESS_SUCCESS: null,
  CREATE_ADDRESS_FAILED: null,
  UPDATE_ADDRESS_FAILED: null,
  DELETE_ADDRESS_SUCCESS: null,
  DELETE_ADDRESS_FAILED: null,

  // address actions
  LOAD_ADDRESS_TYPES_SUCCESS: null,
  LOAD_ADDRESS_TYPES_FAILED: null,
  CREATE_ADDRESS_TYPE_SUCCESS: null,
  UPDATE_ADDRESS_TYPE_SUCCESS: null,
  CREATE_ADDRESS_TYPE_FAILED: null,
  UPDATE_ADDRESS_TYPE_FAILED: null,
  DELETE_ADDRESS_TYPE_SUCCESS: null,
  DELETE_ADDRESS_TYPE_FAILED: null,

  // student status actions
  LOAD_STUDENT_STATUSES_SUCCESS: null,
  LOAD_STUDENT_STATUSES_FAILED: null,
  CREATE_STUDENT_STATUS_SUCCESS: null,
  UPDATE_STUDENT_STATUS_SUCCESS: null,
  CREATE_STUDENT_STATUS_FAILED: null,
  UPDATE_STUDENT_STATUS_FAILED: null,
  DELETE_STUDENT_STATUS_SUCCESS: null,
  DELETE_STUDENT_STATUS_FAILED: null,

  // state actions
  LOAD_ACCOUNTADDRESSES_SUCCESS: null,
  LOAD_ACCOUNTADDRESSES_FAILED: null
});

export default action;