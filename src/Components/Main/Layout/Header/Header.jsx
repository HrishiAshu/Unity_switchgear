import React, { useState } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(null);

    const handleWhyUnity = () => {
        navigate('/Home/WhyUnity');
    };

    const handleDropdownHover = (eventKey) => {
        setShowDropdown(eventKey);
    };

    const handleDropdownLeave = () => {
        setShowDropdown(null);
    };

    return (
        <div className="header-main-container">
            <div className="headerContent">
                <Navbar  expand="lg" style={{
                        backgroundColor: "#fff" ,fontFamily: "ABBvoice-Medium, sans-serif" , fontSize:"15px" , boxShadow:" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"  }} className=" fixed-top">
                    <Container>
                        <Navbar.Brand href="#home">Unity</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <NavDropdown
                                    title="About Us"
                                    id="basic-nav-dropdown"
                                    onMouseEnter={() => handleDropdownHover('about')}
                                    onMouseLeave={handleDropdownLeave}
                                    show={showDropdown === 'about'}
                                >

                                    <NavDropdown.Item className="nav-dropdown-item" href="/WhyUnity">Why Unity</NavDropdown.Item>
                                    <NavDropdown.Divider className="nav-dropdown-divider" />

                                    <NavDropdown.Item className="nav-dropdown-item" href="/OurHistory">Our History</NavDropdown.Item>
                                    <NavDropdown.Divider className="nav-dropdown-divider" />

                                    <NavDropdown.Item className="nav-dropdown-item" href="#action/3.3">Our Customers</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/Solutions">Solutions</Nav.Link>
                                <Nav.Link href="/Products">Products</Nav.Link>
                                <Nav.Link href="/Projects">Projects</Nav.Link>
                                <Nav.Link href="/Press">Press & Media</Nav.Link>
                                <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
                            </Nav>
                            <NavDropdown title="Profile"
                                onMouseEnter={() => handleDropdownHover('Profile')}
                                onMouseLeave={handleDropdownLeave}
                                show={showDropdown === 'Profile'}
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item className="nav-dropdown-item" href="/Admin/*">Admin</NavDropdown.Item>
                                <NavDropdown.Divider className="nav-dropdown-divider" />
                                <NavDropdown.Item className="nav-dropdown-item" href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Divider className="nav-dropdown-divider" />
                                <NavDropdown.Item className="nav-dropdown-item" href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider className="nav-dropdown-divider" />
                                <NavDropdown.Item className="nav-dropdown-item" href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;
