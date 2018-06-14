import React, { Component } from 'react';
import Header from './Header'; // from './components/Header'
import Search from './Search';

const appStyle = { // perkelt i CSS/SASS ir settint klase ant elemento
  textAlign: 'center',
  top: '5px'
};

export default class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        <Header />
        <Search />
      </div> 
    );
  }
}
