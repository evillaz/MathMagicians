import React from 'react';
import PropTypes from 'prop-types';

const NumberInput = ({ number }) => (
  <div className="numberInput">
    <input type="number" id="number-input" name="number" placeholder={number} />
  </div>
);

NumberInput.defaultProps = {
  number: 0,
};

NumberInput.propTypes = {
  number: PropTypes.number,
};

export default NumberInput;
