import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Job-Search</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Services</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>

                            {/* <NavDropdown title="Manage Lottery" id="basic-nav-dropdown">
                                <Link to="/add">
                                    <NavDropdown.Item href="">About</NavDropdown.Item>
                                </Link>
                                <Link to="/table">
                                    <NavDropdown.Item href="">Services</NavDropdown.Item>
                                </Link>
                                <NavDropdown.Item href="#action/3.3">Manual Draw</NavDropdown.Item>
                            </NavDropdown> */}
                            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Right</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Link</Link>
                                    </li>
                                </ul>
                            </div>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;