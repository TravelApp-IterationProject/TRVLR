import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Bigtable from './Bigtable.js';
import UserLinks from './UserLinks.js';


class SidebarRoutedComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id='sb-routed-component'>
        <Switch>
          <Route path='/Bigtable' component={UserLinks}/>
        </Switch>
      </div>
    )
  }
}

export default SidebarRoutedComponent;
