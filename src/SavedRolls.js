import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';

import {getSavedRolls} from './SharedCode.js';

class SavedRolls extends React.Component {

  constructor (props) {
    super(props);

    //this.parseOutValue = this.parseOutValue.bind(this);
    this.handleRollClick = this.handleRollClick.bind(this);

      this.state = { savedRolls: [] };

  };

  

  handleRollClick(index)  {
    this.props.communicationHandler(this.state.savedRolls[index]);
  } 

  //parseOutValue(propertyName, content)  {
    //var start = content.indexOf(propertyName);
    //var end = content.indexOf(",",start);
    //var returnString = content.slice(start + propertyName.length + 1,end);
    //return returnString; 
  //}

  

  componentWillMount() {

    this.setState({ savedRolls: getSavedRolls() })
    
  }

  //componentDidMount() {
    //cookie.remove('SavedRoll');
  //}

 render() {
    return (
      <ul>
        {this.state.savedRolls.map((value, index) => {
          return <li key={index}><BrowserRouter><Link to="" onClick={()=>this.handleRollClick(index)}>{value.name}</Link></BrowserRouter></li>
        })}
      </ul>
    )
 } 

}

export default SavedRolls;

