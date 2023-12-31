import React, { useState } from "react";
import {Navbar, Nav, Container, Button, NavDropdown} from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import logo2 from '../../assets/Group10.png';
// import logo from "../../assets/logo.png";
// import logo2 from '../../assets/Group 10.png';
import "./Header.css";
function Header() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <>
      {/* <Navbar
        collapseOnSelect
        expand="lg"
        bg="pink"
        variant="light"
        fixed="top"
        expanded={expanded}
        id="SOA-navbar"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Coincade Logo" className="logo " />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto text-light">
              <NavLink
                activeclassname="navbar__link active"
                className="navbar__link"
                to="/about"
              >
                ABOUT US
              </NavLink>
              <NavLink
                activeclassname="navbar__link active"
                className="navbar__link"
                to="/aura-reading"
              >
                AURA READING
              </NavLink>
              <NavLink
                activeclassname="navbar__link active"
                className="navbar__link"
                to="/service"
              >
                SERVICES
              </NavLink>
              <NavLink
                activeclassname="navbar__link active"
                className="navbar__link"
                to="/nft"
              >
                CHAKRA ANALYSIS
              </NavLink>
             
            </Nav>
            <Nav>
              <Button
                className="btn-SOA">
                Get Started
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

<Navbar
        collapseOnSelect
        expand="lg"
        // bg="dark"
        variant="light"
        fixed="top"
        expanded={expanded}
        id="SOA-navbar"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo2} alt="Secret of aura Logo" className="logo " />
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : "expanded")}
            aria-controls=" responsive-navbar-nav navbarScroll"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto text-light">
              <NavLink
                activeclassname="navbar__link active"
                className="navbar__link nav-link"
                to="/about"
                onClick={() => setExpanded(false)}
              >
                ABOUT US
              </NavLink>
              <NavLink
                activeclassname="navbar__link active"
                className="navbar__link nav-link"
                to="/aura-reading"
                onClick={() => setExpanded(false)}
              >
                AURA TRANSFORMATION
              </NavLink>
              <NavDropdown
                id="nav-dropdown-SOA"
                title="SERVICES"
              >
                  <NavDropdown.Item href="/reading-n-scanning-service">Reading & Scanning Service</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/healing-n-therapy-service">
                    Healing & Therapy Service
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  {/* <NavDropdown.Item href="/aura-reading">Aura Reading Service</NavDropdown.Item> */}
                  
              </NavDropdown>
              <NavLink
                activeclassname="navbar__link active"
                className="navbar__link nav-link"
                to="/chakra-analysis"
                onClick={() => setExpanded(false)}
              >
                CHAKRA ANALYSIS
              </NavLink>
            </Nav>
            <Nav>
            {/* <Button
                className="btn-SOA">
                Get Started
              </Button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
