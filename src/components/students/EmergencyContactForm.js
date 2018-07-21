import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import moment from 'moment';
import AddNewFieldButton from '../common/AddNewFieldButton';

class EmergencyContactForm extends Component {
  render() {
    const {person,  onSave, onChange, saving, errors} = this.props;
    return (
      <div className="row">
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
        <div className="col-lg-5">
          <TextInput
          name="Phone Number"
          label="Phone Number"
          placeholder="Phone Number"
          value=""
          onChange={onChange}
          addClass="medium-textbox"
          error="" />
        </div>
        <div className="col-lg-5">
          <TextInput
          name="Email"
          label="Email"
          placeholder="Email"
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
    );
  }
}

EmergencyContactForm.propTypes = {
  person: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default EmergencyContactForm;
