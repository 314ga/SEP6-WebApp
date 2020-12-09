import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AppNavbar = () => {
    return (


        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/" className="display-2"><strong>UNITED AIRLINES</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/"><strong>FLIGHT INFO</strong></Nav.Link>
                    <Nav.Link href="/ManufacturerPage"><strong>MANUFACTURER INFO</strong></Nav.Link>
                    <Nav.Link href="/WeatherPage"><strong>WEATHER INFO</strong></Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>

    );
};

export default AppNavbar;