import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import { Link } from "react-router-dom";

const Navba = () => {
  return (
    <Navbar color="warning" light expand="md" className="mb-5">
      <Container>
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
      </Container>
    </Navbar>
  )
}

export default Navba
