import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar.js'
import Mainpage from './Mainpage.js'
import axios from 'axios'
import yelpApi from '../controllers/yelpApi'
import fetch from 'isomorphic-fetch'
import { Link } from 'react-router-dom';

var that;
class CreateAccount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id='Login'>
           <nav id="Login">
          <Link to='/Login'>After CreateAccount, go to LOGIN</Link>
        </nav>
      </div>
   
    )
  }
}
export default CreateAccount;