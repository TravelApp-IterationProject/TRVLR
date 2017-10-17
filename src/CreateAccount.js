import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

var that;
class CreateAccount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.create = this.create.bind(this)
  }

  create() {
    //plugin get request here
    console.log("logging in!");
  }

  render() {
    return (
      <div className='routed-component'>
        <div className="login-container">
        <h1>Create Account</h1>
        <form onSubmit={this.create}>
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="password" placeholder="password"></input>
        <input type='submit' value="login"></input>
        </form>
       
           <Link to='/'>Login</Link>
        </div>
      </div>
   
    )
  }
}
export default CreateAccount;

  // <form method="POST" action='/login'>
  //   <input name="username" type="text" placeholder="username"></input>
  //   <input name="password" type="password" placeholder="password"></input>
  //   <input type='submit' value="login">
  // </form>
  // <a href='./signup'>Sign up</a>
