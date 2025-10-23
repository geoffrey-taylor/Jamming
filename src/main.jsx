import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';

// Render main App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);