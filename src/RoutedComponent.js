import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import Login from './Login.js';
import CreateAccount from './CreateAccount.js';
import Bigtable from './Bigtable.js';
import Results from './Results.js';


class RoutedComponent extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    render() {
      
      return (
        <div id='routed-component'>

          <Switch>
            <Route exact path="/" component={() => <Login update={this.props.update} currentUser={this.state.currentUser}/>} />
            <Route exact path='/CreateAccount' component={CreateAccount}/>
            <Route path='/Bigtable' component={() => <Bigtable update={this.props.update} currentUser={this.state.currentUser}/>}/>
            {/* <Route path='/Results' component={() => <Results update={this.props.update} currentUser={this.state.currentUser}/>}/> */}
           </Switch>
  
        </div>
      )
    }
  }
  export default RoutedComponent;

 

