import PropTypes from 'prop-types';

const CalculatorButton = ({ buttonText, buttonFunction }) => (
  <button onClick={() => buttonFunction({ buttonText })} type="button" id={`button${buttonText}`} key={buttonText} className="button">{buttonText}</button>
);

CalculatorButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonFunction: PropTypes.func.isRequired,
};

export default CalculatorButton;
