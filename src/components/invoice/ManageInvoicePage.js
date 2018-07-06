import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TotalInvoiceActions from '../../actions/totalInvoiceActions';
import InvoiceForm from '../invoice/InvoiceForm';
import toastr from 'toastr';

class ManageInvoicePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      totalInvoice: Object.assign({}, this.props.totalInvoice),
      errors: {},
      saving: false,
      deleting: false
    };

    //this.getPhoneNumber = this.getPhoneNumber.bind(this);
    this.updateInvoiceState = this.updateInvoiceState.bind(this);
    this.saveInvoice = this.saveInvoice.bind(this);
    this.deleteInvoiceInner = this.deleteInvoiceInner.bind(this);
  }

  updateInvoiceState(event) {
    const field = event.target.name;
    let totalInvoice = this.state.totalInvoice;
    totalInvoice[field] = event.target.value;
    return this.setState({totalInvoice: totalInvoice });
  }

  invoiceFormIsValid() {
    let formIsValid = true;
    let errors = {};

    this.setState({ errors: errors });
    return formIsValid;
  }

  saveInvoice(event) {
    event.preventDefault();
    if (!this.invoiceFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.actions.saveInvoice(this.state.totalInvoice)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({ saving: false });
        toastr.error(error);
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Invoice saved!');
    this.context.router.push('/invoices');
  }

  deleteInvoiceInner(event) {
    event.preventDefault();
    this.setState({ deleting: true });
    this.props.actions.deleteInvoice(this.state.totalInvoice)
      .then(() => { this.redirectDelete(); })
      .catch(error => {
        this.setState({ deleting: false });
        toastr.error(error);
      });
  }

  redirectDelete() {
    this.setState({ deleting: false });
    toastr.success('Invoice Deleted!');
    this.context.router.push('/invoices');
  }

  render() {
    return (
      <InvoiceForm
        onChange={this.updateInvoiceState}
        onSave={this.saveInvoice}
        onDelete={this.deleteInvoiceInner}
        totalInvoice={this.state.totalInvoice}
        errors={this.state.errors}
        saving={this.state.saving}
        deleting={this.deleting}
      />
    );
  }
}

ManageInvoicePage.propTypes = {
  totalInvoice: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

// Pull in the React Router context so router is available on this.context.router.
ManageInvoicePage.contextTypes = {
  router: PropTypes.object
};

function getTotalInvoiceById(totalInvoices, id) {
  const totalInvoice = totalInvoices.filter(totalInvoice => totalInvoice.invoiceId == id);
  if (totalInvoice) return totalInvoice[0]; // since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const invoiceId = ownProps.params.id; // from the path '/invoice/:id'

  let totalInvoice = {
    invoiceId: 0,
    invoiceTypeId: 0,
    invoiceNumber: '',
    paid: false,
    description: '',
    invoiceLines: [
      {invoiceLineId: 0, description: '', quantity: 0, cost: 0.00, paid: false}
    ]
  };

  if (invoiceId && state.totalInvoices.length > 0) {
    totalInvoice = getTotalInvoiceById(state.totalInvoices, invoiceId);
  }

  return {
    totalInvoice: totalInvoice
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TotalInvoiceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageInvoicePage);
