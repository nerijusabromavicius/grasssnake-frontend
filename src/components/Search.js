import React, { Component } from 'react';
import FormView from './FormView';
import request from 'superagent';
import Chart3 from './Chart';

const config = {
  url: "http://78.63.82.104:3001/?sequence=",
  results: []
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    //   chartData:{
    //     labels:['On-target', 'Off-target'],
    //     datasets:[
    //         {
    //            label:'Population',
    //             data:[
    //                 this.value,
    //                 (1 - this.value)
    //             ] 
    //         }
    //     ]
    // }
}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(this.state.chartData.datasets[0].data[0]);
    console.log(this.state.chartData.datasets[0].data[0]);
    this.setState({
      value: e.target.value,
      chartData: {
        labels:['On-target', 'Off-target'],
        datasets:[
            {
               label:'Population',
                data:[
                  e.target.value,
                  (1 - e.target.value)
                ] 
            }
        ]
    }
    });
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
           /> 
           {/* value bus paimamas is state, nereiks perduot*/ }
           <Chart3 data={this.state.chartData} onChange={this.handleChange}/>
      </div>
      );
    }
  }
export default Search;