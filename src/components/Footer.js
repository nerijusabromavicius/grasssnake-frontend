import React from 'react';
import logo from '../logo.png';

const styles = {
  logo: {
    height: '80px'
  },
  footer: {
    backgroundColor: '#222',
    height: '80px',
    padding: '6px',
    bottom: 0,
    position: 'absolute',
    width: '100%'
  }
}

const Footer = (props) => {
  return (
    <footer className="App-header" style={styles.footer}>
      <img src={logo} className="App-logo" alt="logo" style={styles.logo} />
    </footer>
  )};
export default Footer;