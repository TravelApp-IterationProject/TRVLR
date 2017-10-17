import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Login from './Login.js';
import { Route, Redirect } from 'react-router'

class CreateAccount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isSignedIn: null
    };
    this.create = this.create.bind(this)
    this.usernameChanged = this.usernameChanged.bind(this)
    this.passwordChanged = this.passwordChanged.bind(this)
  }

  create(e) {
    //plugin get request here
     e.preventDefault()
    const { username, password } = this.state
    if (username && password) {
      axios.post('/api/signup', {
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
    console.log("logging in!");
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
        <h1>Create Account</h1>
        <form onSubmit={this.create}>
        <input name="username" type="text" placeholder="username" value={username} onChange={this.usernameChanged}></input>
        <input name="password" type="password" placeholder="password" value={password} onChange={this.passwordChanged}></input>
        <button className='loginBtn' onClick={this.create}>Create account</button>
        </form>
          {(isSignedIn === true) &&  <Redirect to='/'/>}
        </div>
      </div>
   
    )
  }
}
export default CreateAccount;
