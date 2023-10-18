import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
  return (
    <>
      <footer style={{ padding: "20px 20px 20px 20px" }} className="bg-dark text-light">
        <Container>
          <Row>
            <Col md={4}>
              <h4>Unity Switchgear</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, nam..</p>
            </Col>
            <Col md={4}>
              <h4>Links</h4>
              <ul className="list-unstyled">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </Col>
            <Col md={4}>
              <h4>Contact</h4>
              <p>Email: contact@example.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p>&copy; {new Date().getFullYear()}  Company</p>
            </Col>
          </Row>
        </Container>

      </footer>
      <p style={{textAlign:"center"}}>  Unity © 2023. All Rights Reserved.</p>

    <p style={{textAlign:"center"}}>Developed By Hrishikesh</p>  
    </>
  )
}

export default Footer
