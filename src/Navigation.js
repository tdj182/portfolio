import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import './styles/Navigation.css'; 

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <Navbar className="Navigation" light expand="sm">
        <NavbarToggler onClick={toggle} />
        <Collapse className="justify-content-center" isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="Navigation-link text-white" activeClassName="selected" tag={RRNavLink} exact to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Navigation-link text-white" activeClassName="selected" tag={RRNavLink} exact to="/projects">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Navigation-link text-white" activeClassName="selected" tag={RRNavLink} exact to="/about">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Navigation-link text-white" activeClassName="selected" tag={RRNavLink} exact to="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Navigation;
