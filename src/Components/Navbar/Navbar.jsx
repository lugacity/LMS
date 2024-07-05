import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo_white.png';

const Navbar = () => {
  const [menu, setMenu] = useState('Home');

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}><Link style={ {textDecoration: 'none', color:'white'}} to="/">Home</Link></li>
        <li onClick={() => setMenu('About')} className={menu === 'About' ? 'active' : ''}><Link style={ {textDecoration: 'none'}} to="/about">About us</Link></li>
        <li onClick={() => setMenu('Services')} className={menu === 'Services' ? 'active' : ''}><Link style={ {textDecoration: 'none'}} to="/services">Services</Link></li>
        <li onClick={() => setMenu('Contact')} className={menu === 'Contact' ? 'active' : ''}><Link style={ {textDecoration: 'none'}} to="/contact">Contact us</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
