import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../utils";
import UserDropDown from "./UserDropdown";
import {
  Navbar as BsNavbar,
  Button,
  Container,
  Nav,
  Badge,
} from "react-bootstrap";
import { CartContext } from "../context/CartContext";

export default function NavBar() {
  const { cartCount } = useContext(CartContext);
  return (
    <BsNavbar bg="dark" variant="dark" expand="sm">
      <Container>
        <BsNavbar.Brand
          as={Link}
          to={"/"}
          className="fw-bold text-white fs-2 navbar-logo"
        >
          Events Hub
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls={"main-navbar"} />
        <BsNavbar.Collapse id="main-navbar">
          <Nav bg="dark" className="ms-auto">
            <Nav.Link as={Link} to="/events">
              Events
            </Nav.Link>
          </Nav>
          <Nav bg="dark" className="ms-auto">
            <Nav.Link as={Link} to="/cart">
              Cart
              <Badge>{cartCount}</Badge>
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>

        <div>
          {isAuthenticated() ? (
            <UserDropDown />
          ) : (
            <div>
              <Button as={Link} variant={"secondary"} to="/login">
                Log In
              </Button>
              <Button
                className="ms-2"
                as={Link}
                variant={"success"}
                to="/signup"
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </Container>
    </BsNavbar>
  );
}
