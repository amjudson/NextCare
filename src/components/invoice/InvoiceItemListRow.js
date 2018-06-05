import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InvoiceItemListRow extends Component {
  render() {
    const line = this.props.line;
    const total = line.costPer * line.quantity;
    return (
      <div className="row row-detail">
        <div className="col-lg-2 item-detail">{line.item}</div>
        <div className="col-sm-2 item-detail">{line.quantity}</div>
        <div className="col-sm-2 item-detail">{line.costPer.toFixed(2)}</div>
        <div className="col-sm-2 item-detail">{total.toFixed(2)}</div>
      </div>
    );
  }
}

InvoiceItemListRow.propTypes = {
  line: PropTypes.object.isRequired
};

export default InvoiceItemListRow;

/*
      <td>
        <button
          className="btn btn-primary"
          name="DeleteButton"
          content="Delete"
          onClick={clickIt}>
          Delete
        </button>
        </td>
*/
