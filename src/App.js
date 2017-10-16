import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';

import Sidebar from './Sidebar.js';
import RoutedComp from './RoutedComp.js';
import styles from '../style.css'
import Mainpage from './Mainpage'

class App extends React.Component {
  render() {
    return (
      <div>
      <Sidebar />
      {<RoutedComp />}
      </div>
    )
  }
}

export default App;

// ReactDOM.render(<Bigtable />, document.getElementById('mount'));


// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import Bigtable from './Bigtable.js';
// import Sidebar from './Sidebar.js';
// import styles from '../style.css'
// import Mainpage from './Mainpage'
// //addded
// import { BrowserRouter, Route } from 'react-router-dom';

// document.addEventListener('DOMContentLoaded', function () {
//   render(
//   //  <Sidebar />
//     <BrowserRouter>
//       <App />
//       {/* <div>
//         <Sidebar />
//         <Route path='/' component={Login} />
//         <Route path='/Bigtable' component={Bigtable} />
//       </div> */}
//     </BrowserRouter>,
//     document.getElementById('mount')
//   );
// });
