import React from "react";
import { BsCart4 } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";

const Navbar = ({ cartCount }) => {
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
        <li>
          <a href="/tickets">Tickets</a>
        </li>
        <li>
          <a href="/cart">
            <BsCart4 />
            Cart<Badge bg="danger">{cartCount}</Badge>
          </a>
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
