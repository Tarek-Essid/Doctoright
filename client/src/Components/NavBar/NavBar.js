import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="whole-nav">
      <a href="/" className="nav-header">
        DOCTORIGHT
      </a>
      <div className="rest-nav">
        <a href="/Services">Services</a>
        <a href="/Pricing">Pricing</a>
        <a href="/About-us">About us</a>
        <a href="/Contact">Contact</a>
        <a href="/">
          <button type="button" href="/" className="nav-btn">
            Start Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
