import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed
import "./CSS/Footer.css";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <img src="path_to_your_logo.png" alt="Logo" style={styles.logoImage} />
        </div>
        <nav style={styles.nav}>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/home" style={styles.link}>Home</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
          <Link to="/service" style={styles.link}>Service</Link>
        </nav>
        <div style={styles.socialMedia}>
          <a href="https://facebook.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div style={styles.address}>
          <p>123 Sports Street</p>
          <p>Sportstown, ST 12345</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  container: {
    maxWidth: '1200px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  logo: {
    flex: '1',
  },
  logoImage: {
    maxHeight: '50px',
  },
  nav: {
    flex: '2',
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    color: '#fff',
    margin: '0 15px',
    textDecoration: 'none',
    fontSize: '16px',
  },
  socialMedia: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    margin: '10px 0',
  },
  socialLink: {
    color: '#fff',
    margin: '0 10px',
    textDecoration: 'none',
    fontSize: '16px',
  },
  address: {
    flex: '1',
    textAlign: 'center',
  },
};

export default Footer;
