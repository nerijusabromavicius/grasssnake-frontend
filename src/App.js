import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';

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
        <Footer />
      </div> 
    );
  }
}
