import React, { Component } from 'react';
import FormView from './FormView';
import request from 'superagent';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
    handleChange(e) {
      this.setState({value: e.target.value});
    }
  
    handleSubmit(e) {
      let value = this.state.value;
      let url = "http://78.63.82.104:3001/?sequence=" + value; // iskelt auksciau i const config = {}
        request
        .get(url)
        .then((res) => {
            alert('probability for this sequence: ' + res.body.scores[value]); // config.results.push({value: res.body.scores[value]})
            console.log(res.body.scores[value]); //Probability
            console.log(this.state.value);  //Sequence
        })
        .catch((err) => {
      // err.message, err.response
   });
      e.preventDefault();
    }
  
    render() {
      return (
        <div>
            <FormView value={this.state.value} onSubmit={this.handleSubmit} onChange={this.handleChange} placeholder="zajebys" type="submit" /> {/* value bus paimamas is state, nereiks perduot*/ }
        </div>
      );
    }
  }
export default Search;