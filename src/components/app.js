// This component handles the app template used on every page
import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row mb-3 banner-container">
          <div className="col-lg-12 banner">The Banner For NextCARE</div>
        </div>
        <div className="row">
          <Header loading={this.props.loading} />
          <div className="col-lg-10 app-body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
