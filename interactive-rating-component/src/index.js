import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RateContextProvider } from './store/RateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RateContextProvider>
      <App />
    </RateContextProvider>
  </React.StrictMode>
);
