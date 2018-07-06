import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InvoiceItemListRow from './InvoiceItemListRow';
import toastr from 'toastr';

class InvoiceItemList extends Component {
  buildTotalLine(totalInvoice) {
    let tot = 0;
    tot = totalInvoice.invoiceLines.map(item => {
      return item.cost * item.quantity;
    });

    return tot.reduce(this.getSum);
  }

  getSum(total, num) {
    return total + num;
  }

  render () {
    const totalInvoice = this.props.totalInvoice;
    const totLine = {description: 'Total', total: this.buildTotalLine(totalInvoice), quantity: 0, cost: 0};
    return (
      <div className="container-fluid">
        <div className="row row-title">
          <div className="col-lg-2">Item</div>
          <div className="col-sm-2">Quantity</div>
          <div className="col-sm-2 ml-3">Cost Per</div>
        </div>
        {totalInvoice.invoiceLines.map(line =>
          <InvoiceItemListRow key={line.invoiceLineId} line={line} />
        )}
        <InvoiceItemListRow key="99999" line={totLine} />
      </div>
    );
  }
}

InvoiceItemList.propTypes = {
  totalInvoice: PropTypes.object.isRequired
};

export default InvoiceItemList;
