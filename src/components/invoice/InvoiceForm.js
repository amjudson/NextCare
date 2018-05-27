import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import {browserHistory} from 'react-router';

const InvoiceForm = ({ invoice, onSave, onDelete, onChange, saving, deleting, errors }) => {
  const returnToPreviousPage = () => {
    browserHistory.push('/invoices');
  };

  const saveButton = invoice.invoiceId < 0 ? (
    <button
      type="submit"
      disabled={saving}
      className="btn btn-primary btn-lg mr-1"
      onClick={onSave}>
      {saving ? 'Saving...' : 'Save'}
    </button>
  ) : '';

  const deleteButton = invoice.invoiceId < 0 ? (
    <button
      type="submit"
      disabled={deleting}
      className="btn btn-primary btn-lg mr-1"
      onClick={onDelete}>
      {deleting ? 'Deleting...' : 'Delete'}
    </button>
  ) : '';

  const disableText = true;
  const disableSelect = true;
  return (
    <div className="container">
      <form>
        <h1>Manage Invoice</h1>
        <div className="row">
          <div className="col-lg-3">
            <TextInput
              disabled={disableText}
              name="fname"
              label="First Name"
              value={invoice.owner.fname}
              onChange={onChange}
              error={errors.name} />
          </div>
          <div className="col-lg-3">
            <TextInput
              disabled={disableText}
              name="lname"
              label="Last Name"
              value={invoice.owner.lname}
              onChange={onChange}
              error={errors.name} />
          </div>
        </div>
        {saveButton}
        {deleteButton}
        <button className="btn btn-primary btn-lg mr-3"
          type="submit" onClick={returnToPreviousPage}>
          Back
        </button>
      </form>
    </div>
  );
};

InvoiceForm.propTypes = {
  invoice: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  deleting: PropTypes.bool,
  errors: PropTypes.object
};

export default InvoiceForm;
