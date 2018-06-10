import React, { Component } from 'react';
import Header from './Header';

const appStyle = {
  textAlign: 'center',
  top: '5px'
};

export default class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        <Header />
      </div> 
    );
  }
}
