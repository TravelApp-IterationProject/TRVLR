import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Bigtable from './Bigtable.js';
import { Route, Redirect } from 'react-router';
import axios from 'axios';


//client has to set cookie in header in all requests 
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isSignedIn: null,
    };
    this.login = this.login.bind(this)
    this.usernameChanged = this.usernameChanged.bind(this)
    this.passwordChanged = this.passwordChanged.bind(this)
    this.updateTopState = this.updateTopState.bind(this)
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
        this.setState({ isSignedIn: true }, this.updateTopState)
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

  updateTopState() {
    let obj = { currentUser: this.state.username };
    this.props.update(obj);
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
          {(isSignedIn === false) && <p>Username and password combination is invalid</p>}
        </div>
      </div>
    )
  }
}
export default Login;
