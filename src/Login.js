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
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.login = this.login.bind(this)
  }

  login() {
    //plugin get request here
    console.log("logging in!");
  }

  render() {
    return (
      <div className='routed-component'>
        <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={this.login}>
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="password" placeholder="password"></input>
        <input type='submit' value="login"></input>
        </form>
       
           <Link to='/CreateAccount'>Create Account</Link>
          <br /><br />(After Authentication, goes
          <Link to='/Bigtable'>HERE)</Link>
        </div>
      </div>
   
    )
  }
}
export default Login;

  // <form method="POST" action='/login'>
  //   <input name="username" type="text" placeholder="username"></input>
  //   <input name="password" type="password" placeholder="password"></input>
  //   <input type='submit' value="login">
  // </form>
  // <a href='./signup'>Sign up</a>
