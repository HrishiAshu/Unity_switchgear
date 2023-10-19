import React from 'react'
import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const navigate = useNavigate();

    const handleWhyUnity = () => {
        navigate("/Home/WhyUnity")
    }


    return (
        <div className='header-main-container'>
            <div className="headerContent">
                <Navbar expand="lg" className="bg-body-tertiary fixed-top">
                    <Container>
                        <Navbar.Brand href="#home">unity</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <NavDropdown title="About Us" id="basic-nav-dropdown">
                                    <NavDropdown.Item  href="/WhyUnity" >Why Unity</NavDropdown.Item>
                                    <NavDropdown.Item href="/OurHistory">Our History</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Our Customers</NavDropdown.Item>
                                    {/* <NavDropdown.Item href="#action/3.3">Our Customers</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Our Customers</NavDropdown.Item> */}


                                </NavDropdown>
                                <Nav.Link href="/Solutions">Solutions</Nav.Link>
                                <Nav.Link href="#link">Products</Nav.Link>
                                <Nav.Link href="#link">Projects</Nav.Link>


                                <Nav.Link href="#link">Contact Us</Nav.Link>
                            </Nav>
                            <NavDropdown title="Profile" id="basic-nav-dropdown">
                                <NavDropdown.Item href="Home/Admin/*">Admin</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default Header
