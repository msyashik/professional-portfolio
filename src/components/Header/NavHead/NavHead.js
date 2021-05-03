import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
// import { Link } from "react-scroll";
const NavHead = () => {
  return (
    <Navbar style={{ background: "transparent" }} expand="sm">
      <Navbar.Brand style={{ color: "white" }} href="#">
        ASHIK
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" style={{ color: "white" }}>
          <li className="nav-item">
            <Link
              href="#home"
              to="home"
              activeClass="active"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              style={{ color: "white" }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="#aboutMe"
              to="aboutMe"
              activeClass="active"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              style={{ color: "white" }}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="#experience"
              to="experience"
              activeClass="active"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              style={{ color: "white" }}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="#skills"
              to="skills"
              activeClass="active"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              style={{ color: "white" }}
            >
              Skills
            </Link>
          </li>

          <li className="nav-item">
            <Link
              href="#projects"
              to="projects"
              activeClass="active"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              style={{ color: "white" }}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="#blog"
              to="blog"
              activeClass="active"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              style={{ color: "white" }}
            >
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="contact"
              to="contact"
              activeClass="active"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              style={{ color: "white" }}
            >
              Contact
            </Link>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavHead;
