import React from 'react';
import "./MainProductPage.css";
import Carousel from 'react-bootstrap/Carousel';
import sampleImage from "../Sources/Daily-News-Wrap-Up-Power-Ministry-Amends-License-Rules-to-Distribute-Electricity.png"
import Container from 'react-bootstrap/Container';
import { Image, Row, Col, Button } from 'react-bootstrap';
import OurServices from '../../Main/OurServices/OurServices';
import OurSolutions from '../../Main/OurSolutions/OurSolutions';
import OurProducts from '../../Main/OurProducts/OurProducts';
import OurNews from '../../Main/OurNews/OurNews';
import OurProjects from '../../Main/OurProjects/OurProjects';
import Slider from '../Carousol/Slider';
 
const MainProductPage = () => {
  return (
    <div className="page-content">
      <Slider />
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
              <Image  style={{boxShadow:" rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}  src={sampleImage} thumbnail />
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="component-container">
        <OurServices />
        <OurSolutions />
        <OurProjects />
        <OurProducts />
        <OurNews />
      </Container>
    </div>
  );
}

export default MainProductPage;
