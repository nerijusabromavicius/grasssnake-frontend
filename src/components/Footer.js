import React from 'react';
import logo from '../logo.png';

const styles = {
  logo: {
    height: '80px'
  },
  header: {
    backgroundColor: '#222',
    height: '80px',
    padding: '6px',
    color: 'white',
    bottom: 0
  }
}

const Footer = (props) => {
  return (
            // <div className="App">
              <footer className="App-header" style={styles.header}>
                <img src={logo} className="App-logo" alt="logo" style={styles.logo} />
              </footer>
            // </div>
  )};
export default Footer;