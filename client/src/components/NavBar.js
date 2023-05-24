import React from 'react';

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <a href="/">Event Hub</a>
      </div>
      <ul className="navbar-links">
      <li>
          <a href={"/"}>Home</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="navbar-buttons">
        <a href="/signup" className="navbar-button">
          Sign Up
        </a>
        <a href="/login" className="navbar-button">
          Log In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
