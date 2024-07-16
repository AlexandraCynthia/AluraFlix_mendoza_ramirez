import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <img className='header-logo' src="https://res.cloudinary.com/dgxnatqij/image/upload/v1717633350/ONE/d24c9171564eb6b6667a5da808fcf1ed_r8odtb.png" alt="Logo" />
      <div className='footer-buttons'>
        <Link to="/" className="footer-button">
          <FontAwesomeIcon icon={faHome} className="icon" /> Home
        </Link>
        <Link to="/nuevo-video" className="footer-button-1">
          <FontAwesomeIcon icon={faPlusCircle} className="icon" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
