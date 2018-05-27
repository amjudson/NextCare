import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InvoiceList from './InvoiceList';
import * as InvoiceActions from '../../actions/invoiceActions';
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
    browserHistory.push('/Invoice');
  }

  render() {
    const {invoices} = this.props;
    return (
      <div>
        <h1>Invoices</h1>
        <input
          type="submit"
          value="Add Invoice"
          className="btn btn-secondary"
          onClick={this.redirectToAddInvoicePage}
        />
        <InvoiceList invoices={invoices} />
      </div>
    );
  }
}

InvoicePage.propTypes = {
  invoices: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    invoices: state.invoices
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(InvoiceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoicePage);
