import React from "react";
import { BsCart4 } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom"; // Add this import
import { isAuthenticated, logout } from "../utils";
import { Button } from "react-bootstrap";

export default function Navbar({ cartCount }) {
  const navigate = useNavigate();
  const user = useRouteLoaderData("root");

  function logoutAction() {
    logout();

    navigate("/");
  }

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
            Cart<Badge bg="danger">{cartCount}</Badge>
          </Link>
        </li>
      </ul>
      {isAuthenticated() ? (
        <div className="navbar-buttons">
          <span>{user?.email} </span>
          <Button variant="secondary" onClick={logoutAction}>
            Logout
          </Button>
        </div>
      ) : (
        <div className="navbar-buttons">
          <Link to="/signup" className="navbar-button">
            {" "}
            {/* Use Link component */}
            Sign Up
          </Link>
          <Link to="/login" className="navbar-button">
            {" "}
            {/* Use Link component */}
            Log In
          </Link>
        </div>
      )}
    </nav>
  );
}
