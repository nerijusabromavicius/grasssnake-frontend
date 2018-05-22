import React, { Component } from 'react';
import logo from './images/logo.png';
import './Header.css';

class Header extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      );
    }
  }
export default Header;