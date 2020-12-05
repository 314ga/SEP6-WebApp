import React from "react";
import { Link } from "react-router-dom";

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

const AppNavbar = () => {
    return (


        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/FlightsPerMonth">Flights</Nav.Link>
                    <Nav.Link href="/Weather">Weather</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Origin1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Origin2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">SOrign3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

            </Navbar.Collapse>
        </Navbar>

    );
};

export default AppNavbar;