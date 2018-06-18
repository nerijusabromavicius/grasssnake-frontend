import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';
import Chart from './components/Chart';

const appStyle = {
  textAlign: 'center',
  top: '5px',
  height:'500px'
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      resultValues: [],
      chartData: {
        label: '',
        datasets: []
      }
    };
  }

  resultsCallback = (dataItem) => {

    let prevDataSets = this.state.chartData.datasets;

    if (this.state.resultValues.indexOf(dataItem.value) > -1) {
      return;
    }

    let prevResultValues = this.state.resultValues;
    prevResultValues.push(dataItem.value);

    prevDataSets.push({label: dataItem.value, data: [dataItem.score], backgroundColor: '#'+ Math.floor(Math.random() * 255 * 255 * 255).toString(16)})
    this.setState({
      resultValues: prevResultValues,
      chartData: {
        datasets: prevDataSets
      }
    })
  }

  render() {
    return (
      <div style={ appStyle }>
        <Header />
        <Search onGetResults={ this.resultsCallback }/>
        <Chart data={ this.state.chartData } onChange={ this.handleChange }/>
        <Footer />
      </div> 
    );
  }
}
