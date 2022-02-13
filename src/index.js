import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { BrowserRouter as Router } from 'react-router-dom';

import './assets/css/index.css';

import storage from "./utils/storage";

const existUser = storage.get(process.env.REACT_APP_KEY_USERINFO);
const accesGranted = existUser ?  !!existUser : false;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App accesGranted={ accesGranted }/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

