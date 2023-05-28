import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../utils";

import UserDropDown from "./UserDropdown";

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Events Hub</Link>
      </div>

      {
        isAuthenticated() ?
          <UserDropDown /> :
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
