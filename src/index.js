import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './Calculator.css';
import MathMagiciansApp from './components/MathMagiciansApp';
import './styles/Calculator.module.css';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <Router>
      <MathMagiciansApp />
    </Router>
  </React.StrictMode>,
);
