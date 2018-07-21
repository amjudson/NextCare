import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import {browserHistory} from 'react-router';
import InvoiceItemList from './InvoiceItemList';
import InvoiceHeader from './InvoiceHeader';
import InvoiceForm from './InvoiceBody';

class CreateInvoiceForm extends Component {
  render() {
    const {totalInvoice, onSave, onDelete, onChange, saving, deleting, errors} = this.props;
    const returnToPreviousPage = () => {
      browserHistory.push('/invoices');
    };

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
      
    
       
        <div className = "row formHolder"> 
          <div className = "col-md-8">
            Form
          </div>
        </div>
    );
  }
}

CreateInvoiceForm.propTypes = {
  totalInvoice: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  deleting: PropTypes.bool,
  errors: PropTypes.object
};

export default CreateInvoiceForm;
