import React from 'react';
import logo from '../logo.png';

const styles = {
  logo: {
    height: '80px'
  },
  header: {
    backgroundColor: '#222',
    height: '80px',
  }
}

const Header = (props) => {
  return (
    <header className="header" style={styles.header}>
      <img src={logo} className="logo" alt="logo" style={styles.logo} />
    </header>
  )};
export default Header;