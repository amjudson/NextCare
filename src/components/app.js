// This component handles the app template used on every page
import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Navigation from './common/Navigation';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <Header loading={this.props.loading} />
        </div>
        <div className="row">
          <Navigation loading={this.props.loading} />
          <main className="main">
            {this.props.children}
          </main>
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
