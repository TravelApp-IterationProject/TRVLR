console.log("RESULTS loaded");
import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar.js'
import Mainpage from './Mainpage.js'
import axios from 'axios'
import yelpApi from '../controllers/yelpApi'
import fetch from 'isomorphic-fetch'
import App from './App.js';
import { Route, Redirect } from 'react-router';

var that;
class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <div className="results-box">
        RESULTS
        { (!this.props.currentUser) &&  <Redirect to='/' /> }
      </div>
    )
  }
}
export default Results;