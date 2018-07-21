import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import {browserHistory} from 'react-router';
import InvoiceItemList from './InvoiceItemList';
import InvoiceHeader from './InvoiceHeader';
import InvoiceBody from './InvoiceBody';
class InvoiceForm extends Component {
  render() {
    const {totalInvoice, onSave, onDelete, onChange, saving, deleting, errors} = this.props;
    const returnToPreviousPage = () => {
      browserHistory.push('/invoices');
    };
    return (   
    <div className="container-fluid mainPage">
      <div className = "row formHolder">
        <div className = "col-md-12">
            <InvoiceHeader />
            <InvoiceBody />
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
