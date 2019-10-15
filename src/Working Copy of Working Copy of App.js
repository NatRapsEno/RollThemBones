import React from 'react';
import logo from './logo.svg';
import './App.css';
import RollDiceButton from './RollDiceButton';

const API = 'https://localhost:44391/';
const DEFAULT_QUERY = 'generate';


const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hits: []
    };

    this.getData = this.getData.bind(this);

  }

	getData(val) {
			console.log(val);
		     }

render() {
const hits = this.state.hits;

render() {
   return (
		<div>
		   <RollDiceButton sendData={this.getData}/>
		</div>
   	  );
}

}

      .then(function(myJson) {
         console.log(JSON.stringify(myJson));
         })


export default App;
