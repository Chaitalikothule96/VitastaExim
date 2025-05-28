import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Header from "./Header"; // make sure this path is correct

const CustomNavbar = () => {
  return (
    <>
    
      <Header />

      {/* Main Navigation */}
      <Navbar expand="lg" bg="light" variant="light" fixed="top" style={{ top: "35px", zIndex: 1040 }} > 
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/logo.jfif" // update the logo path if needed
              alt="Vitasta Exim Logo"
              height="50"
              className="me-2"
            />
           <strong className="brand-name">Vitasta Exim</strong> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto custom-nav">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
              <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
              <Nav.Link as={NavLink} to="/certificate">Certificates</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
