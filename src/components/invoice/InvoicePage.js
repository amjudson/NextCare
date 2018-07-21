import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InvoiceList from './InvoiceList';
import * as TotalInvoiceActions from '../../actions/totalInvoiceActions';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

class InvoicePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      errors: {},
      deleting: false
    };

    this.redirectToAddInvoicePage = this.redirectToAddInvoicePage.bind(this);
  }

  redirectToAddInvoicePage() {
    browserHistory.push('/invoice');
  }

  render() {
    const totalInvoices = this.props.totalInvoices; // fas fa-plus-square
    console.log(totalInvoices + '----');
    return (
      <div className="container-fluid">
        <div className="row">
          <div className = "pageHeaders">
              <div className="col-md-4">
                  <h2>Invoices</h2>
              </div>
              <div className="col-md-8 text-right">
              <input
                type="submit"
                value="Add Invoice"
                className="btn nextcareBtn"
                onClick={this.redirectToAddInvoicePage}
              />
              </div>
          </div>
          <InvoiceList totalInvoices={totalInvoices} />
        </div>
      </div>
    );
  }
}

InvoicePage.propTypes = {
  totalInvoices: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    totalInvoices: state.totalInvoices
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TotalInvoiceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoicePage);
