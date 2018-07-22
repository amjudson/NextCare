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
import Collapsible from 'react-collapsible';
class StudentForm extends Component {
  render() {
    const {personComplete, sexes, onSave, onChange, saving, errors, dobChange} = this.props;
    const returnToPreviousPage = () => {
      browserHistory.push('/persons');
    };
    const moveToAccountPage = () => {
      browserHistory.push('/account/1');
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
      <div class = "row">
        <div className = "col-md-6">
          <div className = "formHeaders">
              <h3>Student Information</h3>
          </div>
        </div>
      </div>
      <div className = "row formHolder">
        <div className = "col-md-2 studentImage">
          
            <img src={'http://placehold.it/100x100&text=Student Photo'} className="img-responsive rounded-circle"/>
          
        </div>
        <div className = "col-md-6">
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
                <Collapsible trigger="Emergency Contact #1" transitionTime = "200"  easing = "ease-in-out">
                <EmergencyContactForm  
                    onChange={onChange}
                    error="" />
                </Collapsible>
                <Collapsible trigger="Emergency Contact #2" transitionTime = "200" easing = "ease-in-out">
                <EmergencyContactForm  
                    onChange={onChange}
                    error="" />
                </Collapsible>
               
              </form>
              
            </div>
            
            <div className = "col-md-4">
            <div className = "row">
              <div className = "col-md-12">
                <div className = "formHeaders flexLine"> 
                      <h3>Student Documents</h3>
                      <AddNewFieldButton className="smallAddNew"
                      name="addNewField"
                      onClick={moveToAccountPage}
                      />
                  </div>
                    <button className="btn btn-block nextcareBtn float-right"
                    type="submit" onClick={moveToAccountPage}>
                    Vaccinations | Uploaded Feb 3<sup>rd</sup> 2018
                    </button>
                    <button className="btn btn-block nextcareBtn float-right"
                    type="submit" onClick={moveToAccountPage}>
                    Field Trip Release | Uploaded June 8<sup>th</sup> 2018
                    </button>
                  </div>
                 </div> 
                 <br />
            </div>
            <div className = "col-lg-4 offset-md-2">
              <button className="btn nextcareBtn "
              type="submit" onClick={moveToAccountPage}>
              View Account
              </button>
            </div>
            <div className = "col-md-3  float-right">
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
        </div>
        </div>
    );
  }
}

StudentForm.propTypes = {
  personComplete: PropTypes.object.isRequired,
  sexes: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  dobChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default StudentForm;
