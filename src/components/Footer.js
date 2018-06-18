import React from 'react';

const styles = {
  logo: {
    height: '80px'
  },
  header: {
    backgroundColor: '#222',
    padding: '6px',
    color: 'white',
    bottom: '0px',
    position: 'fixed',
    width: '100%',
    height: '3%'
  }
}

const Footer = (props) => {
  return (
    <footer className="footer" style={styles.header}>
      <span>Žalče 2018</span>
    </footer>
  )};
export default Footer;