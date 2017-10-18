import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Threeimgs from './Threeimgs.js';
import Suggestions from './Suggestions.js';

class Results extends React.Component {

  render() {
    let result = [];
    let split = ['resultone', 'resulttwo', 'resultthree', 'resultfour'];
    for (let i = 0; i < this.props.data.length; i++) {

      result.push(<div id={split[i]} className='result'>
        {this.props.data[i]}
        <div className="container">
          <button className="flights">Flights</button>
          <button id={i} className="suggestions" onClick={() => this.props.suggest(this.props.data[i])}>Things to do</button>
        </div>
      </div>)
    }
    return (
      <div>
        <div className="results-box">
          {result}
          {console.log('suggestion props: ', this.props.suggestions)}
          {
            //this renders the suggestions when the state is updated
            this.props.suggestions &&
            <Suggestions data={this.props.suggestions} />
          }
        </div>
      </div>
    )
  }
}
export default Results;