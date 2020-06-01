import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => (
  <nav className="nav-bar">
    <ul className="nav-bar__links flex-row">
      <Link to='/' className="nav-bar__links__link">HOME</Link>
      <Link to='/about' className="nav-bar__links__link">ABOUT</Link>
      <Link to='/portfolio' className="nav-bar__links__link">PORTFOLIO</Link>
      <Link to='/contact' className="nav-bar__links__link">CONTACT</Link>
    </ul>
  </nav>
);

export default Nav