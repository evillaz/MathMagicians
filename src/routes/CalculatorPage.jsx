import Calculator from '../components/Calculator';
import styles from '../styles/Calculator.module.css';

const CalculatorPage = () => (
  <div className={styles.calculatorApp}>
    <h2 className="tittle">
      Let&apos;s do some math!
    </h2>
    <Calculator />
  </div>
);

export default CalculatorPage;
