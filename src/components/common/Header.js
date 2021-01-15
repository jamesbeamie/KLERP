import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import logo from "../../assets/kerplogo.png";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Brand href='/'>
        <img src={logo} alt='' style={{ width: "50%" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto '>
          <Nav.Link href='#home'>Agronomy</Nav.Link>
          <Nav.Link href='#link'>Harvesting</Nav.Link>
          <Nav.Link href='#link'>Transport</Nav.Link>
          <Nav.Link href='#link'>Husbandry</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
