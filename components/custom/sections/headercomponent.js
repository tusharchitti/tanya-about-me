/* eslint-disable */
import React, { useState } from "react";
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import Image from "next/image";
import logo from "../../../assets/images/logos/green-logo.png";
import logo2 from "../../../assets/images/logos/white-logo.png";
import image from "next/image";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div id="section">
      
      <div className="header1 po-relative">
        <Container>
          <Navbar className="navbar-expand-lg h1-nav">
            
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about">About Me</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/professional">Professional</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/service">Services</NavLink>
                </NavItem>
                
                <NavItem>
                  <NavLink href="/contact">Block my Calendar</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default HeaderComponent;
