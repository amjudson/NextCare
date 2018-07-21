import React, {Component} from 'react';
import PropTypes from 'prop-types';


class InvoiceHeader extends Component {
  render() {
    const {totalInvoice, onSave, onDelete, onChange, saving, deleting, errors} = this.props;
    return (

      <div className="row invoiceHeader">
        {/* Invoice Headers */}
          <div className="col-md-4">
            <h4>From: Daycare Name</h4>
            Daycare Address<br />
            City, State<br/>
              000000
          </div>
          <div className="col-md-4">
          <h4>To: Daycare Customer</h4>
            Person Address<br />
            City, State <br/>
            000000
          </div>
          <div className="col-md-4">
            Invoice #90-98792<br />
            Balance Due<br />
            Date<br />
            Account Number<br />
          </div>
      </div>
   
    );
  }
}

InvoiceHeader.propTypes = {
  totalInvoice: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  deleting: PropTypes.bool,
  errors: PropTypes.object
};

export default InvoiceHeader;
