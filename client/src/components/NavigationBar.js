import React from "react";
import logo from "../logo.svg";
import { Nav, Navbar, Container } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          {/* <img src={logo} alt="our-logo" width="30" height="30" /> */}
          EventHub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>
            <Nav.Link href="/cart">
              <Button>
                <BsCart4 /> Cart <Badge bg="danger">9</Badge>
                <span className="visually-hidden">added to cart</span>
              </Button>
            </Nav.Link>
            <Nav className="mr">
              <Nav.Link href="/login">
                <Button variant="outline-success">Login</Button>
              </Nav.Link>
              <Nav.Link href="/signup">
                <Button variant="outline-success">Signup</Button>
              </Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
