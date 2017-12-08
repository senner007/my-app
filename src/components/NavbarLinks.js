import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const NavbarLinks = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>Home</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/buttons">
        <NavItem eventKey={1}>Buttons</NavItem>
      </LinkContainer>
      <LinkContainer to="/results">
        <NavItem eventKey={1}>Results</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
);

// <ul>
//   <li><Link to='/'>Home</Link></li>
//   <li><Link to='/buttons'>Buttons</Link></li>
//   <li><Link to='/results'>Results</Link></li>
// </ul>

export default NavbarLinks;
