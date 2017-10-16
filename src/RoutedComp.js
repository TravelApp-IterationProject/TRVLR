import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import Login from './Login.js';
import Bigtable from './Bigtable.js';


class RoutedComp extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    render() {
      return (
        <div id='Bigtable'>

          <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/Bigtable' component={Bigtable}/>
           </Switch>
  
        </div>
        // <nav id="Login">
        //     <Link to='/Bigtable'>HERE</Link>
        //   </nav>
      )
    }
  }
  export default RoutedComp;