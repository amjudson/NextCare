import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import {browserHistory} from 'react-router';
import InvoiceItemList from './InvoiceItemList';
import InvoiceHeader from './InvoiceHeader';
import CreateInvoiceForm from './CreateInvoiceForm';
class InvoiceForm extends Component {
  render() {
    const {totalInvoice, onSave, onDelete, onChange, saving, deleting, errors} = this.props;
    const returnToPreviousPage = () => {
      browserHistory.push('/invoices');
    };
console.log(totalInvoice);
    const saveButton = totalInvoice.invoiceId < 0 ? (
      <button
        type="submit"
        disabled={saving}
        className="btn nextcareBtn"
        onClick={onSave}>
        {saving ? 'Saving...' : 'Save'}
      </button>
    ) : '';

    const deleteButton = totalInvoice.invoiceId < 0 ? (
      <button
        type="submit"
        disabled={deleting}
        className="btn nextcareBtn"
        onClick={onDelete}>
        {deleting ? 'Deleting...' : 'Delete'}
      </button>
    ) : '';

    const disableText = true;
    const disableSelect = true;
    return (
      
    <div className="container-fluid mainPage">
      <div className="row">
        <div className = "pageHeaders">
            <div className="col-md-6">   
            <h2>Manage Invoice</h2>
            </div>
        </div>
      </div>
      <div className = "row formHolder">
        <div className = "col-md-12">
              <InvoiceHeader />
              <CreateInvoiceForm totalInvoice = {totalInvoice}/>
          </div>
        </div>
      </div>

    );
  }
}

InvoiceForm.propTypes = {
  totalInvoice: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  deleting: PropTypes.bool,
  errors: PropTypes.object
};

export default InvoiceForm;
