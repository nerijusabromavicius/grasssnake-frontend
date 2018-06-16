import React, { Component } from 'react';
import FormView from './FormView';
import request from 'superagent';

const config = {
  url: "http://78.63.82.104:3001/?sequence=",
  results: []
}

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
    const value = this.state.value;
    request
    .get((config.url + value))
    .then((res) => {
        // alert('probability for sequence "' + value + '" : ' + res.body.scores[value]); // config.results.push({value: res.body.scores[value]})
        config.results.push({sequence: value, value: res.body.scores[value]});
        console.log(config.results)
        // console.log(res.body.scores[value]); //Probability
        // console.log(this.state.value);  //Sequence
    })
    .catch((err) => {
  // alert('error: check sequence format');
  console.log(err);
  });
    e.preventDefault();
  }
  
  render() {
    return (
      <div>
          <FormView
           value={this.state.value}
           onSubmit={this.handleSubmit}
           onChange={this.handleChange}
           placeholder="zajebys"
           type="submit" /> 
           {/* value bus paimamas is state, nereiks perduot*/ }
      </div>
      );
    }
  }
export default Search;