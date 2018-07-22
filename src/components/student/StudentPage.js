import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as personCompleteActions from '../../actions/personCompleteActions';
import StudentList from './StudentList';
import { browserHistory } from 'react-router';

class StudentPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddPersonPage = this.redirectToAddPersonPage.bind(this);
  }

  redirectToAddPersonPage() {
    browserHistory.push('/student');
  }

  render() {
    const { personCompletes } = this.props;
    console.log(this.props);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className = "pageHeaders">
              <div className="col-md-4">
                  <h2>Students</h2>
              </div>
              <div className="col-md-8 text-right">
              <input
                type="submit"
                value="Add Student"
                className="btn nextcareBtn"
                onClick={this.redirectToAddPersonPage}
              />
              </div>
          </div>
          <StudentList personCompletes={personCompletes} />
        </div>
    </div>
    );
  }
}

StudentPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage);
