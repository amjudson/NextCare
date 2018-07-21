import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddNewFieldButton extends Component {
  render() {
    const {name, onClick, content, btnClass} = this.props;
    const buttonClass = btnClass || 'btn btn-primary smallAddNew';
    return (
      <div>
        <button className={buttonClass}
          name={name}
          onClick={onClick}>
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>
    );
  }
}

AddNewFieldButton.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default AddNewFieldButton;
