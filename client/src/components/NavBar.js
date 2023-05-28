import React from "react";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import { isAuthenticated, logout } from "../utils";
import { Button, NavDropdown } from "react-bootstrap";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useRouteLoaderData("root");

  function logoutAction() {
    logout();
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Events Hub</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavDropdown title="Events" id="basic-nav-dropdown">
            {/* Add your event links here */}
            <NavDropdown.Item href="#event1">Event 1</NavDropdown.Item>
            <NavDropdown.Item href="#event2">Event 2</NavDropdown.Item>
            {/* ... */}
          </NavDropdown>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {
        isAuthenticated() ?
        <div className="navbar-buttons">
          <span>{user?.email} </span>
          <Button variant="secondary" onClick={logoutAction}>Logout</Button>
        </div> :
        <div className="navbar-buttons">
            <Link to="/signup" className="navbar-button">
              Sign Up
            </Link>
            <Link to="/login" className="navbar-button">
              Log In
            </Link>
          </div>
      }
    </nav>
  );
};

export default Navbar;
