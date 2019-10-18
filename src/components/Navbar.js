import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from "react-router-dom";

export default class Navba extends Component {
  render() {
    return (
      <div>
        <Navbar color="warning" light expand="md">
          <Link to="/">
              <NavbarBrand style={{ fontWeight: "bold", fontSize: 30, color: "White" }}>
                Home
              </NavbarBrand>
          </Link>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <Link to="control"><NavLink style={{ fontWeight: "bold", fontSize: 20, color: "White" }} href="/control" >Control</NavLink></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
