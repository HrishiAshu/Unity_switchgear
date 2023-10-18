import React from 'react';
import "./MainProductPage.css";
import Carousel from 'react-bootstrap/Carousel';
import sampleImage from "../Sources/sampleImage.jpg"
import Container from 'react-bootstrap/Container';
import { Image, Row, Col, Button } from 'react-bootstrap';
import OurServices from '../../Main/OurServices/OurServices';
import OurSolutions from '../../Main/OurSolutions/OurSolutions';
import OurProducts from '../../Main/OurProducts/OurProducts';
import OurNews from '../../Main/OurNews/OurNews';
import OurProjects from '../../Main/OurProjects/OurProjects';

const MainProductPage = () => {

  return (
    <div className="page-content">
      <Container className="mobile-carousel-container">
        <Carousel interval={5000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
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

      <div>
        <OurServices />
      </div>

      <div>
        <OurSolutions />
      </div>

      <div>
        <OurProjects />
      </div>

      <div>
        <OurProducts />
      </div>

      <div>
        <OurNews />
      </div>





      
    </div>
  );
}

export default MainProductPage;
