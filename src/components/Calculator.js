import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function handleClick(buttonName) {
    const newState = calculate(state, buttonName.buttonText);
    setState(newState);
  }

  const CalculatorButton = ({ buttonText }) => (
    <button onClick={() => handleClick({ buttonText })} type="button" id={`button${buttonText}`} key={buttonText} className="button">{buttonText}</button>
  );

  CalculatorButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
  };

  const items = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  return (
    <div className="calculator">
      <p className="numberInput">{state.next || state.total || '0'}</p>
      <div className="calculatorButtons">
        {items.map((item) => (
          <CalculatorButton key={item} buttonText={item} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
