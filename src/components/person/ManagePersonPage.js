import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as personCompleteActions from '../../actions/personCompleteActions';
import * as phoneActions from '../../actions/phoneActions';
import PersonForm from './PersonForm';
import toastr from 'toastr';
import moment from 'moment';

class ManagePersonPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      personComplete: Object.assign({}, this.props.personComplete),
      errors: {},
      saving: false,
      isBirthday: this.props.isBirthday,
      isSsn: this.props.isSsn
    };

    this.updatePersonState = this.updatePersonState.bind(this);
    this.savePerson = this.savePerson.bind(this);
    this.handleDobDateChange = this.handleDobDateChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.personComplete.person.personId != nextProps.personComplete.person.personId) {
      // necessary to populate form whene existing person is loaded directly.
      let personComplete = this.props.actions.loadPerson(nextProps.personComplete.person.personId);
      this.setState({personComplete: Object.assign({}, personComplete) });
    }
  }

  updatePersonState(event) {
    console.log('NAME:', event.target.name);
    console.log('VALUE:', event.target.value);
    const field = event.target.name;
    let personComplete = this.state.personComplete;
    personComplete.person[field] = event.target.value;
    return this.setState({personComplete: personComplete });
  }

  personFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.personComplete.person.lastName.length < 3) {
      errors.lastName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }

    if (this.state.personComplete.person.firstName.length < 3) {
      errors.firstName = 'First name must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  savePerson(event) {
    event.preventDefault();
    if (!this.personFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.actions.savePerson(this.state.personComplete.person)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({ saving: false });
        toastr.error(error);
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Person saved!');
    this.context.router.push('/persons');
  }

  handleDobDateChange(date) {
    let personComplete = this.state.personComplete;
    personComplete.person.dateOfBirth = date.format();
    return this.setState({personComplete: personComplete });
  }

  render() {
    const {isBirthday, isSsn} = this.props;
    return (
      <PersonForm
        onChange={this.updatePersonState}
        onSave={this.savePerson}
        personComplete={this.state.personComplete}
        isBirthday={this.state.isBirthday}
        isSsn={this.state.isSsn}
        errors={this.state.errors}
        saving={this.state.saving}
        sexes={this.props.sexes}
        personTypes={this.props.personTypes}
        dobChange={this.handleDobDateChange}
      />
    );
  }
}

ManagePersonPage.propTypes = {
  personComplete: PropTypes.object.isRequired,
  sexes: PropTypes.array.isRequired,
  personTypes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  isBirthday: PropTypes.bool,
  isSsn: PropTypes.bool
};

// Pull in the React Router context so router is available on this.context.router.
ManagePersonPage.contextTypes = {
  router: PropTypes.object
};

function getPersonById(personCompletes, personId) {
  const personComplete = personCompletes.filter(personComplete => personComplete.person.personId == personId);
  if (personComplete) return personComplete[0]; // since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const personId = ownProps.params.id; // from the path '/person/:id'

  let personComplete = {
    person: {
      personId: 0,
      personTypeId: 0,
      alias: '',
      dateOfBirth: '1900-01-01T00:00:00',
      lastName: '',
      firstName: '',
      middleName: null,
      socialSecurityNumber: '',
      ssnSalt: '',
      sex: '',
      raceId: 0,
      prefix: '',
      suffix: ''
    },
    addresses: {},
    emails: {},
    phones: {}
  };

  if (personId && state.personCompletes.length > 0) {
    personComplete = getPersonById(state.personCompletes, personId);
  }

  const personTypesFormattedForDropdown = state.personTypes.map(type => {
    return {
      value: type.personTypeId.toString(),
      text: type.description
    };
  });

  const sexes = [
    {value: 'M', text: 'Male'},
    {value: 'F', text: 'Female'}
  ];

  return {
    personComplete: personComplete,
    sexes: sexes,
    personTypes: personTypesFormattedForDropdown,
    isBirthday: state.isBirthday,
    isSsn: state.isSsn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(personCompleteActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePersonPage);
