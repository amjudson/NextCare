import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import {browserHistory} from 'react-router';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


class CustomerInfoForm extends Component {
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
    
    
        return (
            <div>
                <form>
                  <div className="row">
                    {/* Customer Name */}
                      <div className="col-lg-6">
                        <TextInput
                        name="Last Name"
                        label="Last Name"
                        placeholder="Last Name"
                        value=""
                        onChange={onChange}
                        addClass="medium-textbox"
                        error="" />
                      </div>
                      <div className="col-lg-4">
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
                  {/* Customer Address */}
                  <div className="row">
                    <div className="col-lg-6">
                      <TextInput
                      name="Address"
                      label="Address"
                      placeholder="Address"
                      value=""
                      onChange={onChange}
                      addClass="medium-textbox"
                      error="" />
                    </div>
                    <div className="col-lg-6">
                      <TextInput
                      name="Address (cont)"
                      label="Address (cont)"
                      placeholder="Address (cont)"
                      value=""
                      onChange={onChange}
                      addClass="medium-textbox"
                      error="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <TextInput
                      name="City"
                      label="City"
                      placeholder="City"
                      value=""
                      onChange={onChange}
                      addClass="medium-textbox"
                      error="" />
                    </div>
                    <div className="col-lg-4">
                    <label>State</label>
                      <RegionDropdown
                      country={country}
                      value={region}
                      classes="form-control medium-textbox"
                      labelType="short"
                      defaultOptionLabel="State"
                      onChange={(val) => this.selectRegion(val)} />
                    </div>
                    <div className="col-lg-2">
                      <TextInput
                      name="Zip"
                      label="Zip"
                      placeholder="Zip"
                      value=""
                      onChange={onChange}
                      addClass="medium-textbox"
                      error="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <TextInput
                      name="Phone Number"
                      label="Phone Number"
                      placeholder="Phone Number"
                      value=""
                      onChange={onChange}
                      addClass="medium-textbox"
                      error="" />
                    </div>
                    <div className="col-lg-6">
                    <TextInput
                      name="Email Address"
                      label="Email Address"
                      placeholder="Email Address"
                      value=""
                      onChange={onChange}
                      addClass="medium-textbox"
                      error="" />
                    </div>
                    <div className = "col-lg-4">
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
                </form>
            </div>
            );
          }
        }
      
      CustomerInfoForm.propTypes = {
        account: PropTypes.object.isRequired,
        onSave: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
        allStates: PropTypes.array.isRequired,
        saving: PropTypes.bool,
        deleting: PropTypes.bool,
        errors: PropTypes.object
      };
      
      export default CustomerInfoForm;
