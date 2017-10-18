console.log("bigtable.js loaded");
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
class Bigtable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // mention: 'Pick',
      // first: 'international',
      // second: 'domestic',
      // saveit:
      // {
      //   'cultural': false,
      //   'outdoors': false,
      //   "international": false,
      //   "domestic": false,
      //   "warm": false,
      //   "cold": false,
      //   "wine": false,
      //   "beer": false
      // },
      // getit: '',
      // suggestion: '',
      // firstpics: 'https://www.zicasso.com/sites/default/files/styles/original_scaled_down/public/cleanup/sampletrip/Greece_Santorini_Tour_Stairs_in_Santorini.jpg',
      // secondpics: 'https://wallpapertag.com/wallpaper/middle/3/3/f/240898-vertical-las-vegas-wallpaper-1080x1920-notebook.jpg',
    };
    // this.toggler = this.toggler.bind(this)
    // this.toggle = this.toggle.bind(this)
    // this.suggest = this.suggest.bind(this)
  }
  

  render() {
    return (
      <div>
        <Mainpage
        setResults={this.props.setResults}
          mention={this.props.mention}
          first={this.props.first}
          second={this.props.second}
          toggle={this.props.toggle}
          toggler={this.props.toggler}
          firstpics={this.props.firstpics}
          secondpics={this.props.secondpics}
          data={this.props.getit}
          suggest={this.props.suggest}
          suggestions={this.props.suggestion}
        />

        {(this.props.setResults === true) &&  <Redirect to='/Results'/>}
        { (!this.props.currentUser) &&  <Redirect to='/' /> }
      </div>
    )
  }
}
export default Bigtable;