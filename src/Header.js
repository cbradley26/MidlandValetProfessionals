import React, { Component } from 'react';
import MVPimage from './mvpimage.png';
import './Header.css';
import { Navbar }from 'react-bootstrap';
import { Nav } from 'react-bootstrap';


class Header extends Component {
  render() {
    return (
        <section>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">     
        <img
            src={MVPimage}
            height="30"
            className="d-inline-block align-top"
            alt="Midland Valet Professionals"
        />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Gallery">Gallery</Nav.Link>
            <Nav.Link href="#Pricing">Pricing</Nav.Link>
            <Nav.Link href="#Testimonies">Testimonies</Nav.Link>
            <Nav.Link href="#Book">Book Now!</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </section>
    );
  }
}

export default Header;