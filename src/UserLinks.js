import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class UserLinks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className='sb-routed-component'>
        <Link to='/Bigtable'>Saved Destinations</Link>
      </div>
    )
  }
}
export default UserLinks;