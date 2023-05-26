import React from "react";
import { BsCart4 } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";

const Navbar = ({ cartCount }) => {
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
          <a href="/tickets">Tickets</a>
        </li>
        <li>
          <Link to="/cart">
            <BsCart4 />
            Cart<Badge bg="danger">{cartCount}</Badge>
          </Link>
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
