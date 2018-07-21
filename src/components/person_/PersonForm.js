import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import AddNewFieldButton from '../common/AddNewFieldButton';
import EmergencyContactForm from './EmergencyContactForm';

class PersonForm extends Component {
  render() {
    const {personComplete, sexes, onSave, onChange, saving, errors, dobChange} = this.props;
    const returnToPreviousPage = () => {
      browserHistory.push('/persons');
    };

    return (

    <div className="container-fluid mainPage">
      <div className="row">
        <div className = "pageHeaders">
            <div className="col-md-6">   
            <h2>Manage Student</h2>
            </div>
        </div>
      </div>
      <div className = "formHeaders">
          <h3>Student Information</h3>
      </div>
      <div className = "row formHolder">
        <div className = "col-md-2 studentImage">
          
            <img src={'http://placehold.it/100x100&text=Student Photo'} className="img-responsive rounded-circle"/>
          
        </div>
        <div className = "col-md-8">
              <form>
                <div className="row">
                  {/* Student Name */}
                    <div className="col-lg-5">
                      <TextInput
                      name="Last Name"
                      label="Last Name"
                      placeholder="Last Name"
                      value=""
                      onChange={onChange}
                      addClass="medium-textbox"
                      error="" />
                    </div>
                    <div className="col-lg-5">
                      <TextInput
                      name="First Name"
                      label="First Name"
                      placeholder="First Name"
                      value=""
                      onChange={onChange}
                      addClass="medium-textbox"
                      error="" />
                    </div>
                    <div className="col-lg-2">
                      <TextInput
                      name="MI"
                      label="MI"
                      placeholder="MI"
                      value=""
                      onChange={onChange}
                      addClass="medium-textbox"
                      error="" />
                    </div>
                  
                </div>
                {/* Student Info */}
                <div className="row">
                  <div className="col-lg-2">
                      <TextInput
                      name="Age"
                      label="Age"
                      placeholder="Age"
                      value=""
                      onChange={onChange}
                      addClass="medium-textbox"
                      error="" />
                    </div>
                    <div className="col-lg-3">
                      <TextInput
                      name="Grade"
                      label="Grade"
                      placeholder="Grade"
                      value=""
                      onChange={onChange}
                      addClass="medium-textbox"
                      error="" />
                    </div>
                    <div className="col-lg-5">
                      <label htmlFor="dateOfBirth">Date of Birth</label>
                      <DatePicker name="dateOfBirth"
                      className="date-text-box form-control medium-textbox"
                      selected={moment(personComplete.person.dateOfBirth)}
                      onChange={dobChange}
                      />
                    </div>
                    <div className = "col-lg-2">
                      <SelectInput
                      name="sex"
                      label="Sex"
                      value={personComplete.person.sex}
                      options={sexes}
                      onChange={onChange}
                      error={errors.sex} />
                      </div>
                    </div>
                
                {/* Emergency Contact */}
            
                <div className="col-lg-12 emergencyContLabel">
                  <h4>Emergency Contact #1</h4>
                </div>
                <EmergencyContactForm  
                    onChange={onChange}
                    error="" />

                 <div className="col-lg-12 emergencyContLabel">
                  <h4>Emergency Contact #2</h4>
                </div>
                <EmergencyContactForm  
                    onChange={onChange}
                    error="" />
              </form>
            </div>
         
        </div>
        
        <form>
          <div className="row">
          <div className="col-lg-1">
              <TextInput
                name="prefix"
                label="Prefix"
                placeholder="Prefix"
                value={personComplete.person.prefix}
                onChange={onChange}
                addClass="medium-textbox"
                error={errors.prefix} />
            </div>
            <div className="col-lg-3">
              <TextInput
                name="firstName"
                label="First Name"
                placeholder="Enter First Name"
                value={personComplete.person.firstName}
                onChange={onChange}
                addClass="medium-textbox"
                error={errors.firstName} />
            </div>
            <div className="col-lg-1">
              <TextInput
                name="middleName"
                label="Middle Initial"
                placeholder=""
                value={personComplete.person.middleName}
                onChange={onChange}
                addClass="medium-textbox"
                error={errors.middleName} />
            </div>
            <div className="col-lg-3">
              <TextInput
                name="lastName"
                label="Last Name"
                placeholder="Enter Last Name"
                value={personComplete.person.lastName}
                onChange={onChange}
                addClass="medium-textbox"
                error={errors.lastName} />
            </div>
            <div className="col-lg-1">
              <TextInput
                name="sufix"
                label="Sufix"
                placeholder="Enter Sufix"
                value={personComplete.person.sufix}
                onChange={onChange}
                addClass="medium-textbox"
                error={errors.sufix} />
            </div>
          </div>
          <div className = "row">
            <div className = "col-lg-3 numberField">
            <TextInput
                name="phone"
                
                placeholder=""
                value='Phone Number'
                onChange={onChange}
                addClass="medium-textbox"
                error={errors.alias} />
           
            <AddNewFieldButton className=""
                name="addNewField"
                onClick={returnToPreviousPage} 
                />
                value={personComplete.person.alias}
                onChange={onChange}
                addClass="medium-textbox"
                error={errors.alias} />

            </div>
          </div>
          <div className = "row">
            <div className="col-lg-1">
              <SelectInput
                name="sex"
                label="Sex"
                value={personComplete.person.sex}
                options={sexes}
                onChange={onChange}
                error={errors.sex} />
            </div>
            <div className="col-lg-4">
            <label htmlFor="dateOfBirth">Date of Birth</label>
              <DatePicker name="dateOfBirth"
                className="date-text-box form-control medium-textbox"
                selected={moment(personComplete.person.dateOfBirth)}
                onChange={dobChange}
              />
            </div>
          </div>
          <div className="row">

           <div className="col-lg-3">
            <TextInput
              name="socialSecurityNumber"
              label="Social Security Number"
              placeholder="Social Security Number"
                value={personComplete.person.socialSecurityNumber}
              onChange={onChange}
              addClass="medium-textbox"
              error={errors.lastName} />
          </div>

          <div className="col-lg-4">

          </div>
        </div>
          <div className="row">
            <div className="col-lg-4">
            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn nextcareBtn col-lg-4"
                onClick={onSave} />
           &nbsp;
            <button className="btn nextcareBtn col-lg-4"
                type="submit" onClick={returnToPreviousPage}>
                Back
            </button>
            </div>
            <div className="col-lg-4">

            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">

            </div>
            <div className="col-lg-4">

            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">

            </div>
            <div className="col-lg-4">

            </div>
          </div>
        </form>
        </div>
    );
  }
}

PersonForm.propTypes = {
  personComplete: PropTypes.object.isRequired,
  sexes: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  dobChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default PersonForm;
