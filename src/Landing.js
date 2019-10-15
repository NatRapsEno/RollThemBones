import React from 'react';
import './App.css';
import DiceRoll from './DiceRoll';
import SavedRolls from './SavedRolls';

import {getFirstSavedRoll} from './SharedCode.js';
import {isObjectEmpty} from './SharedCode.js';

class Landing extends React.Component {
  constructor (props) {
    super(props);

    this.state = { savedRoll: {} }

    this.handleSavedRollClicked = this.handleSavedRollClicked.bind(this);
  }

  handleSavedRollClicked(roll) {
	
	this.setState({ savedRoll: roll });	
	
  }

  componentWillMount() {

    var savedRoll = getFirstSavedRoll();
    //var savedRoll = {};

    if (isObjectEmpty(savedRoll))
    {
	savedRoll = {name: '', howMany: 2, minimum: 1, maximum: 10, description: '', sumResult: false };
    }

    this.setState({ savedRoll: savedRoll });
    
  }

  render() {

    return (
     <div>
      <div className="dock--l">
	 <SavedRolls communicationHandler = {this.handleSavedRollClicked} />
      </div>

      <div className="form-style-1">
	 <DiceRoll savedRoll={this.state.savedRoll} />
      </div>
     </div>
    );
  }

}

export default Landing;
