import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';
import Chart from './components/Chart';

const appStyle = { // perkelt i CSS/SASS ir settint klase ant elemento
  textAlign: 'center',
  top: '5px',
  height:'500px'
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      labels: [],
      chartData: {
        label: '',
        datasets: []
      }
    };
  }

  resultsCallback = (dataItem) => {

    let prev = this.state.chartData;
    let prevDataSets = prev.datasets;
    // let prevLabels = this.state.labels;

    prevDataSets.push({label: dataItem.value, data: [dataItem.score], backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)}) //https://www.paulirish.com/2009/random-hex-color-code-snippets/
    // prevLabels.push(dataItem.value);

    this.setState({ chartData: {
      // labels: prevLabels,
      datasets: prevDataSets
    }})
    console.log(this.state);
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
