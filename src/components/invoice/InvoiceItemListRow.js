import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InvoiceItemListRow extends Component {
  render() {
    const line = this.props.line;
    const total = line.cost * line.quantity;
    const lineDetail = line.total ? (
      <div className="row row-detail total-line">
        <div className="col-md-2 item-detail">{line.item}</div>
        <div className="col-md-2 item-detail"></div>
        <div className="col-md-2 item-detail number-detail"></div>
        <div className="col-md-2 item-detail number-detail">{line.total.toFixed(2)}</div>
      </div>
    ) : (
        <div className="row row-detail">
          <div className="col-md-2 item-detail">{line.description}</div>
          <div className="col-md-2 item-detail">{line.quantity}</div>
          <div className="col-md-2 item-detail number-detail">{line.cost.toFixed(2)}</div>
          <div className="col-md-2 item-detail number-detail">{total.toFixed(2)}</div>
        </div>
      );

    return (
      lineDetail
    );
  }
}

InvoiceItemListRow.propTypes = {
  line: PropTypes.object.isRequired
};

export default InvoiceItemListRow;
