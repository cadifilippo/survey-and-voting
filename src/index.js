import React from 'react';
import ReactDOM from 'react-dom';
import './common/styles/global.css';
import AppProviders from './context';
import AppRouter from './routes/AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <AppRouter />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
);
