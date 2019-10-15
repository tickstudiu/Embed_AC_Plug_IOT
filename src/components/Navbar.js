import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class Navba extends Component {
  render() {
    return (
<div>
    <Navbar color="warning" light expand="md">
        <NavbarBrand style={{fontWeight:"bold",fontSize:30,color:"White" }} href="/">Home</NavbarBrand>
        <NavbarToggler  />
        <Collapse  navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink style={{ fontWeight:"bold",fontSize:20,color:"White" }} href="../page/Control" >Control</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
  }
}
