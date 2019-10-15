import React, { Component } from 'react';


{/* 
const API = 'https://localhost:44391/';
const DEFAULT_QUERY = 'generate';
*/} 

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class RollDiceButton extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hits: []
    };

  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }



render() {
    return (
	 <button>
	   Roll Dice
	 </button>
	 
         )}
}

export default RollDiceButton;