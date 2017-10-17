import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Bigtable from './Bigtable.js';
import { Route, Redirect } from 'react-router'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isSignedIn: null
    };
    this.login = this.login.bind(this)
    this.usernameChanged = this.usernameChanged.bind(this)
    this.passwordChanged = this.passwordChanged.bind(this)
  }

  
  login(e) {
    e.preventDefault()
    const { username, password } = this.state
    if (username && password) {
      axios.post('/api/login', {
        username,
        password
      })
      .then(() => {
        this.setState({ isSignedIn: true })
      })
      .catch(() => {
        this.setState({ isSignedIn: false })
      });
    }
  }

  usernameChanged(e) {
    const { value } = e.target
    this.setState(state => ({ username: value }))
  }

  passwordChanged(e) {
    const { value } = e.target
    this.setState(state => ({ password: value }))
  }

  render() {
    const { username, password, isSignedIn } = this.state
    return (
      <div className='routed-component'>
        <div className="login-container">
          <h1>Login</h1>
          <form>
            <input name="username" type="text" placeholder="username" value={username} onChange={this.usernameChanged}></input>
            <input name="password" type="password" placeholder="password" value={password} onChange={this.passwordChanged}></input>
            <button className='loginBtn' onClick={this.login}>Login</button>
          </form>
          <Link to='/CreateAccount'>Create Account</Link>

          {(isSignedIn === true) &&  <Redirect to='/Bigtable'/>}
          {(isSignedIn === false) && <p>Username and password combination is invalid.</p>}
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
