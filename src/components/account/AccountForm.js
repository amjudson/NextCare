import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import {browserHistory} from 'react-router';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import DatePicker from 'react-datepicker';
import Collapsible from 'react-collapsible';
import CustomerInfoForm from '../common/CustomerInfoForm';
import AddNewFieldButton from '../common/AddNewFieldButton';
class AccountForm extends Component {
  constructor (props) {
    super(props);
    this.state = { country: 'United States', region: '' };
  }
  selectRegion (val) {
    this.setState({ region: val });
  }

  render() {
    const {account, allStates, onSave, onDelete, onChange, saving, deleting, errors} = this.props;
    const { country, region } = this.state;
    const returnToPreviousPage = () => {
      browserHistory.push('/accounts');
    };
    const gotoStudent = () => {
      browserHistory.push('/student/1');
    };
    const gotoCreatStudent = () => {
      browserHistory.push('/student');
    }
    const gotoInvoice = () => {
      browserHistory.push('/invoice/1');
    };
    const viewInvoice = () => {
      browserHistory.push('/viewinvoice');
    };
    const saveButton = account.accountId < 0 ? (
      <button
        type="submit"
        disabled={saving}
        className="btn btn-primary btn-lg mr-1"
        onClick="{onSave}">
        {saving ? 'Saving...' : 'Save'}
      </button>
    ) : '';

    const deleteButton = account.accountId < 0 ? (
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

      <div className="container-fluid mainPage">
  
  
        <div className="row">
          <div className = "pageHeaders">
              <div className="col-md-6">   
              <h2>Manage Account</h2>
              </div>
  
          </div>
        </div>
        <div class = "row">
          <div className = "col-md-6">
            <div className = "formHeaders">
                <h3>Account Information</h3>
            </div>
          </div>
        </div>
        <div className = "row formHolder">
         
          <div className = "col-md-8">
          <CustomerInfoForm />   
          </div>
              <div className = "col-md-4">
                <div className = "row">
                <div className = "col-md-12">
                  <div className = "formHeaders flexLine">
                      
                      <div className = "col-md-9">
                        <h3>Student(s) On Account</h3>
                      </div>
                      <div className = "col-md-3 float-right">
                        
                        <AddNewFieldButton className="smallAddNew"
                        name="addNewField"
                        onClick={gotoCreatStudent}
                        />
                      </div>
                    
                  </div>
                    <button className="btn btn-block nextcareBtn float-right"
                    type="submit" onClick={gotoStudent}>
                    Student Name 1
                    </button>
                    <button className="btn btn-block nextcareBtn float-right"
                    type="submit" onClick={gotoStudent}>
                    Student Name 2
                    </button>
                  </div>
                 </div> 
                 <br />
                 <div className = "row">
                  <div className = "col-md-12">
                    <div className = "formHeaders flexLine">
                      
                        <div className = "col-md-9">
                          <h3>Invoices</h3>
                        </div>
                        <div className = "col-md-3 float-right">
                          
                          <AddNewFieldButton className="smallAddNew"
                          name="addNewField"
                          onClick={gotoInvoice}
                          />
                        </div>
                      
                    </div>
                      <button className="btn btn-block nextcareBtn float-right"
                      type="submit" onClick={viewInvoice}>
                      Unpaid Invoice
                      </button>
                      <button className="btn btn-block nextcareBtn float-right"
                      type="submit" onClick={viewInvoice}>
                      Unpaid Invoice 2
                      </button>
                    </div>
                  </div> 
                </div>
            </div>
          </div>
      );
    }
  }

AccountForm.propTypes = {
  account: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  allStates: PropTypes.array.isRequired,
  saving: PropTypes.bool,
  deleting: PropTypes.bool,
  errors: PropTypes.object
};

export default AccountForm;
