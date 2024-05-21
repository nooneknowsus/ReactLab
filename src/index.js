import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Letreiro from './components/Letreiro';
import Relogio from './components/Relogio';
import Contador from './components/Contador';
import Components from './components/TableOfContents';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
