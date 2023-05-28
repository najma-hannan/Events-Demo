import React from "react";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import { isAuthenticated, logout } from "../utils";
import { Button } from "react-bootstrap";

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
