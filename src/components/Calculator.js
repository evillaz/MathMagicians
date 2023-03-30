import React from 'react';
import PropTypes from 'prop-types';
import NumberInput from './numberInput';

const ButtonList = ({ items }) => (
  <div className="calculatorButtons">
    {items.map((item) => (
      <button type="button" id={`button${item}`} key={item} className="button">{item}</button>
    ))}
  </div>
);

ButtonList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Calculator = () => {
  const items = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div className="calculator">
      <NumberInput />
      <ButtonList items={items} />
    </div>
  );
};

export default Calculator;
