import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as personCompleteActions from '../../actions/personCompleteActions';
import PersonList from './PersonList';
import { browserHistory } from 'react-router';

class PersonsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddPersonPage = this.redirectToAddPersonPage.bind(this);
  }

  redirectToAddPersonPage() {
    browserHistory.push('/person');
  }

  render() {
    const { personCompletes } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className = "pageHeaders">
              <div className="col-md-4">
                  <h2>Person List</h2>
              </div>
              <div className="col-md-8 text-right">
              <input
                type="submit"
                value="Add Person"
                className="btn nextcareBtn"
                onClick={this.redirectToAddPersonPage}
              />
              </div>
          </div>
          <PersonList personCompletes={personCompletes} />
        </div>
    </div>
    );
  }
}

PersonsPage.propTypes = {
  personCompletes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    personCompletes: state.personCompletes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(personCompleteActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonsPage);
