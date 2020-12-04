import React from "react";
import { Link } from "react-router-dom";

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

import axios from 'axios';


const Home = () => {
    axios.post(`https://uaflights.azurewebsites.net/api/FlightsPerMonth?name=maria&code=1PYCOLZoJHvy8UHqgKKOecJ50fzJBaWUMtuNgrZixbZ6KYs5nTy7aQ==`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })



    return (
        <div className="page page1">
            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <Link to="/FlightsPerMonth" class="nav-link" href="#">Flights</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Weather" class="nav-link" href="#">Weather</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Origin Airports
        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">KFG</a>
                                <a class="dropdown-item" href="#">EWR</a>
                                <a class="dropdown-item" href="#">LGA</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav> */}
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="/FlightsPerMonth">Flights</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            <div className="flagTop" />
            <div className="flagCenter">
                <h1 className="country">Welcome to the Homepage</h1>
                <div className="otherLinks">
                    <Link to="/FlightsPerMonth">Nigeria</Link>
                    <Link to="/">Home</Link>
                </div>
            </div>
            <div className="flagBottom" />
        </div>
    );
};

export default Home;