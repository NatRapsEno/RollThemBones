import React from 'react';
import logo from './logo.svg';
import './App.css';
import RollDiceButton from './RollDiceButton';

const API = 'https://localhost:44391/';
const DEFAULT_QUERY = 'generate';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = { dice: [] }
  }

   componentDidMount() {
     fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ dice: data }));
  }


  render() {

    const results = this.state.dice;

    return (
      <ul>
        {results.map(die => {
          return (
            <li key={die.sequence}>{die.result}</li>
          );
        })}
      </ul>
    );
  }

}

export default App;
