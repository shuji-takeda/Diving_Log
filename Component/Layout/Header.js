import React, {Component} from "react";
import PopUp from "./PopUp";
import Link from "next/link";
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/Sample">
                    Sharering Diving Log
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Add">Add</Nav.Link>
                        <Nav.Link href="/Search">Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
    );
  }
}

export default Header;
