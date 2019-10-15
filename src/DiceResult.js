import React from 'react';
import './App.css';


class DiceResult extends React.Component {

  constructor (props) {
    super(props);

      this.state = {
      summedResult: 0,
      dice: [] 
    };

      this.sumResult = this.sumResult.bind(this);
  }

  sumResult() {

      var sum = 0;
      var i;
      for (i = 0; i < this.props.dice.length; i++) { 
        sum += this.props.dice[i];
      }
      return sum;

  }


 render() {
    return (
     <div className="form-style-1">
        <dt>Result</dt>
	<dd>{this.props.sumResult ? this.sumResult() : this.props.dice.join(",") }</dd>
     </div>
    )
 } 

}

export default DiceResult;

