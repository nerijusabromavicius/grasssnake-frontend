import React, { Component } from 'react';
import logo from '../logo.png';

const styles = {
  logo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: '80px'
  },
  header: {
    backgroundColor: '#222',
    height: '80px',
    padding: '6px',
    color: 'white'
  }
}

class Header extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header" style={styles.header}>
            <img src={logo} className="App-logo" alt="logo" style={styles.logo} />
          </header>
        </div>
      );
    }
  }
export default Header;