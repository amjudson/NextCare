import React, {Component} from 'react';
import PropTypes from 'prop-types';


class InvoiceBody extends Component {
  render() {
    const {totalInvoice, onSave, onDelete, onChange, saving, deleting, errors} = this.props;
    console.log(totalInvoice);
    return (
<div className="InvoiceBody ">
    <div className="row invoiceTH">
    {/* Invoice Headers */}
        <div className="col-md-3 ">
        Child Name
        </div>
        <div className="col-md-3">
        Comments
        </div>
        <div className="col-md-3">
        Monthly Cost
        </div>
        <div className="col-md-3">
        Total
        </div>
    </div>
    <div className = "row">
        Invoice Charges Row Added Here
    </div>
    <div className = "col-md-4 offset-md-8 invoiceTotals">
        <div className = "row">

            <div className = "col-md-6">
            Subtotal
            </div>
            <div className = "col-md-6">
            Amount
            </div>
 
        </div> 
    </div>
    <div className = "col-md-4 offset-md-8 invoiceTotals">
        <div className = "row">

            <div className = "col-md-6">
                Tuition Assistance
            </div>
            <div className = "col-md-6">
                +TA Amount
            </div>

        </div> 
    </div>
    <div className = "col-md-4 offset-md-8 invoiceTotals">
        <div className = "row">

            <div className = "col-md-6">
                Total
            </div>
            <div className = "col-md-6">
                $0.00
            </div>

        </div> 
    </div>
    <div className = "col-md-4 offset-md-8 invoiceTotals">
        <div className = "row">
        </div> 
    </div>
 </div>  
    );
  }
}

InvoiceBody.propTypes = {
  totalInvoice: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  deleting: PropTypes.bool,
  errors: PropTypes.object
};

export default InvoiceBody;
