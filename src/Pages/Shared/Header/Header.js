import logo from '../../../Images/logo1.png'
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'


const Header = () => {
  return (
    // <div className='navbar-containe'>
      <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark" sticky='top'>
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt=""height={30} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home#home">Home</Nav.Link>
              <Nav.Link href="/home#service">Service</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/about'>About</Nav.Link>
              <Nav.Link as={Link} to='/login'>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    // </div>
  );
};

export default Header;
