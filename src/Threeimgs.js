import React from 'react';
import ReactDOM from 'react-dom';

class Threeimgs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
 render() {
   return (
  <div>
     <div className='picone' onClick={this.props.toggler}><img className ='imgfirst' src={this.props.firstpics}/><div className ='txtpic'>{this.props.first}</div></div>
     <div className='picone' onClick={this.props.toggle}><img className ='imgfirst' src={this.props.secondpics}/><div className ='txtpic'>{this.props.second}</div></div>
     {/* <div className='picthree'><p className ='midtext'>{this.props.mention}</p></div> */}
   </div>
   )
 }
}
export default Threeimgs;