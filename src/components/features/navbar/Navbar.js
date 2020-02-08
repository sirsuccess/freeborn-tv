import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button
} from "reactstrap";

import Logo from "../../common/Logo/Logo";
import "./Navbar.css";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Logo />
      <Navbar
        color="dark"
        className="text-success position-sticky sticky-top navbar1"
        light
        expand="md"
      >
        <NavbarToggler onClick={toggle} className="bg-light" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto text-success" navbar>
            <NavItem>
              <NavLink className="text-white" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/Video">
                Video
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/Video">
                Galary
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/about-us">
                About us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/Video">
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <InputGroup>
              <Input placeholder="Search..." />
              <InputGroupAddon addonType="append" color="warning">
                <Button color="warning">
                  <i class="fa fa-search"></i>
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
