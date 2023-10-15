import React from 'react'
import "./MainProductPage.css"
import Carousel from 'react-bootstrap/Carousel';
import sampleImage from "../Sources/sampleImage.jpg"
import Container from 'react-bootstrap/Container';
import {Image, Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';




const MainProductPage = () => {
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
    <div className="page-content">

      <Container className="mobile-carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block  w-100"
              src={sampleImage}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sampleImage}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sampleImage}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <div className="HomepageWhoWeAre">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h2>Who we are</h2>
            <p>
              Some text or description about the content goes here.
            </p>
            <Button variant="primary">Read More</Button>
          </Col>
       
          <Col xs={12} md={6}>
            {/* Image 2 */}
            <Image src={sampleImage} thumbnail />

          </Col>
        </Row>
      </Container>
    </div>
      <div className="OurServicesHomePage">
 
      <Container>
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

    </div>

  )
}

export default MainProductPage
