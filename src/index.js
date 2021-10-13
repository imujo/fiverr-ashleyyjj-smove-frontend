import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/main.css'
import { ReloadStateProvider } from './state/ReloadState'

import {
  BrowserRouter as Router,
} from "react-router-dom"; 




ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ReloadStateProvider>
        <App />
      </ReloadStateProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


