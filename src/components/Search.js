import React, { Component } from 'react';
import FormView from './FormView';
import request from 'superagent';
import Chart from './Chart';

const config = {
  url: "http://78.63.82.104:3001/?sequence=",
  results: []
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const value = this.state.value;
    request
    .get((config.url + value))
    .then((res) => {
        config.results.push({sequence: value, value: res.body.scores[value]});
        console.log(config.results)
    })
    .catch((err) => {
  // alert('error: check sequence format');
      console.log(err);
  })};
  
  render() {
    return (
      <div>
          <FormView
           value={this.state.value}
           onSubmit={this.handleSubmit}
           onChange={this.handleChange}
           /> 
           <Chart 
          //  data={this.state.chartData} 
           />
      </div>
      );
    }
  }
export default Search;