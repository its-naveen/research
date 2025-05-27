import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { BrowserRouter } from 'react-router';
import { AppProvider } from './context/appContext';
import { ToastProvder } from './context/toastContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <ToastProvder>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToastProvder>
    </AppProvider>
  </React.StrictMode>
);
