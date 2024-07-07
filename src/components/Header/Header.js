import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <nav className='navegador'>
        <ul>
          <img className='header-logo' src="https://res.cloudinary.com/dgxnatqij/image/upload/v1717633350/ONE/d24c9171564eb6b6667a5da808fcf1ed_r8odtb.png" alt="logo" />
        </ul>
        <ul>
          <li className='link-home roboto-bold'><Link to="/">HOME</Link></li>
          <li className='link-home roboto-bold'><Link to="/nuevo-video">NUEVO VIDEO</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
