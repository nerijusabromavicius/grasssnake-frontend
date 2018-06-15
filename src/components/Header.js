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
    color: 'white'
  }
}

const Header = (props) => {
  return (
            <div>
              <header className="header" style={styles.header}>
                <img src={logo} className="logo" alt="logo" style={styles.logo} />
              </header>
            </div>
  )};
export default Header;