import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavHead = () => {
  return (
    <Navbar style={{ background: "transparent" }} expand="sm">
      <Navbar.Brand style={{ color: "white" }} href="#">
        ASHIK
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link style={{ color: "white" }} hre="#">
            Home
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} hre="#">
            About
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} hre="#">
            Skills
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} hre="#">
            Experience
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} hre="#">
            Blog
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} hre="#">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavHead;
