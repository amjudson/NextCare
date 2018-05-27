import React from 'react';
import PropTypes from 'prop-types';

const CommonButton = ({ name, onClick, content }) => {
  return (
    <div>
      <button className="btn btn-primary"
        name={name}
        onClick={onClick}>
        {content}
      </button>
    </div>
  );
};

CommonButton.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CommonButton;
