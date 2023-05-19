import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/test-tweets-cards">
    <App />
  </BrowserRouter>
);
