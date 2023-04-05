import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import CalculatorPage from '../routes/CalculatorPage';
import Home from '../routes/Home';
import QuotePage from '../routes/QuotePage';

const MathMagiciansApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="calculator" element={<CalculatorPage />} />
      <Route path="quote" element={<QuotePage />} />
    </Route>
  </Routes>
);

export default MathMagiciansApp;
