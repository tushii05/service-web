import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom"

const Na = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className='shadow'>
                <Container >
                    <Navbar.Brand href="/">Job-Portal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                        // className="me-auto my-2 my-lg-0"
                        // style={{ maxHeight: '100px' }}
                        // navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/service">Services</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                        <NavLink to='/login' className="btn btn-outline-primary ms-auto px-4 rounded-pill">
                            <i className="fa fa-sign-in me-2"></i> Login</NavLink>
                        <NavLink to='/register' className="btn btn-outline-primary ms-2 rounded-pill">
                            <i className="fa fa-user-plus me-2"></i>Register</NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Na;