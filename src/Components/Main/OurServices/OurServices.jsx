import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row'
import "./OurServices.css"


const OurServices = () => {
    const services = [
        { id: 1, name: 'Service 1' },
        { id: 2, name: 'Service 2' },
        { id: 3, name: 'Service 3' },
        { id: 4, name: 'Service 4' },
        { id: 5, name: 'Service 5' },
        { id: 6, name: 'Service 6' },
        { id: 7, name: 'Service 7' },
        { id: 8, name: 'Service 8' },
        { id: 9, name: 'Service 9' },
      ];
  return (
    <div className="OurServicesHomePage">
 
    <Container>
      
        <h2 style={{textAlign:"center"}}>Our Services</h2>
    <Row>
      {services.map((service) => (
        <Col key={service.id} xs={12} sm={6} md={4}>
          <Card className="service-card">
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
    </div>
  )
}

export default OurServices
