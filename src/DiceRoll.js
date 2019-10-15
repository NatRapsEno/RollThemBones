import React from 'react';
import './App.css';
import DiceResult from './DiceResult';
import cookie from 'react-cookies'
import {getRandomInts} from './SharedCode.js';

const API = 'https://localhost:44391/';
const DEFAULT_QUERY = 'generate';
const formFields = ["name", "howMany", "minimum", "maximum", "description", "sumResult"];



class DiceRoll extends React.Component {
  constructor (props) {
    super(props);

      this.state = { 
        savedRoll: props.savedRoll,
        summedResult: 0,
        dice: [] 
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveFormFields = this.saveFormFields.bind(this);

  }

   componentWillReceiveProps(props) {
	if (props.savedRoll != this.state.savedRoll)  {
	  this.setState({savedRoll : props.savedRoll});
	  //this.forceUpdate();
	}

  }

   saveFormFields() {
     var i;
     var returnString = "{";
     for (i = 0; i < formFields.length; i++) {
       returnString += '"' + formFields[i] + '":"' + this.state.savedRoll[formFields[i]] + '",';
     }

     return returnString.slice(0,returnString.length -1) + "}";
   }

  handleSubmit(event) {

    event.preventDefault();
    var ints = [];
    ints = getRandomInts(1,10,2,false);
    //let queryParameters = "?minimum=" + this.state.savedRoll.minimum + "&maximum=" + this.state.savedRoll.maximum + "&howMany=" + this.state.savedRoll.howMany + "&sumResult=" + this.state.savedRoll.sumResult;
    //fetch(API + DEFAULT_QUERY + queryParameters)
    // .then(response => response.json())
    // .then(data => this.setState({ dice: data.result }));
    this.setState({ dice: ints });
    cookie.save(this.state.savedRoll.name, this.saveFormFields(), { path: '/', expires: new Date('December 17, 2025 03:24:00') })

  }

  handleChange(e) {
    // If you are using babel, you can use ES 6 dictionary syntax
    // let change = { [e.target.name] = e.target.value }
    let change = this.state.savedRoll;
    if (e.currentTarget.type == "checkbox")
    {
       change[e.target.name] = e.target.checked;
    }
    else
    {
      change[e.target.name] = e.target.value;
    }
    this.setState(change);
  }

 render() {
    return (
     <div>		
      <form className="form-style-1" onSubmit={this.handleSubmit}>
	   <div>
	        <label>
	          Name:
	        </label>
	          <input
	            name="name"
	            type="text"
		    value={this.state.savedRoll.name}
                    defaultValue={this.props.savedRoll.name}
		    className="field-long"
                    onChange={this.handleChange}
		  />
	   </div>
	   <div>
	        <label>
	          Minimum:
		  <span className="required">*</span>
	        </label>
	          <input
	            name="minimum"
	            type="text"
		    value={this.state.savedRoll.minimum}
	            defaultValue={this.props.savedRoll.minimum}
		    className="field-short"
		    maxLength="4"
		    size="4"
                    onChange={this.handleChange}
		  />
	        <label>
	          Maximum:
		  <span className="required">*</span>
	        </label>
	          <input
	            name="maximum"
	            type="text"
		    value={this.state.savedRoll.maximum}
	            defaultValue={this.props.savedRoll.maximum}
		    className="field-short"
		    maxLength="4"
		    size="4"
                    onChange={this.handleChange}
		  />
	  </div>
	  <div>
	        <label>
	          How Many:
                  <span className="required">*</span>
	        </label>
	          <input
	            name="howMany"
	            type="text"
		    value={this.state.savedRoll.howMany}		    
	            defaultValue={this.props.savedRoll.howMany}
                    className="field-short"
		    maxLength="2"
		    size="2"
                    onChange={this.handleChange}
		  />
		<input
	            name="sumResult"
		    id="sumResult"
	            type="checkbox"
		    value={this.state.savedRoll.sumResult}
                    defaultValue={this.props.savedRoll.sumResult}
		    className="marginLeft"
                    onChange={this.handleChange}
		/>
		<label htmlFor="sumResult">Sum</label>
	  </div>
	   <div>
	        <label>
	          Description:
	        </label>
	          <input
	            name="description"
	            type="text"
		    value={this.state.savedRoll.description}
                    defaultValue={this.props.savedRoll.description}
		    className="field-long"
                    onChange={this.handleChange}
		  />
	   </div>
           <input type="submit" className="centerElement" value="Roll" />
      </form>
      <div>
        {this.state.dice.length > 0 &&
	  <DiceResult sumResult={this.state.sumResult} dice={this.state.dice} />
        }
      </div>
     </div>      

    );
  }
}

export default DiceRoll;
