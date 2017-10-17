import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Login from './Login.js';
import App from './App.js';
import styles from '../style.css'
import Mainpage from './Mainpage'

import { HashRouter, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', function () {
  render(
    <HashRouter>
      <App />
    </HashRouter>,
    document.getElementById('mount')
  );
});
