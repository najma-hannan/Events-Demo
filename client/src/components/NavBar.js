import React from "react";
import { BsCart4 } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom"; // Add this import

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Event Hub</Link> {/* Use Link component */}
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">
            <BsCart4 />
            Cart<Badge bg="danger">9</Badge>
          </Link>
        </li>
      </ul>
      <div className="navbar-buttons">
        <Link to="/signup" className="navbar-button"> {/* Use Link component */}
          Sign Up
        </Link>
        <Link to="/login" className="navbar-button"> {/* Use Link component */}
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
