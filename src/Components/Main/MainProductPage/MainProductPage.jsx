import React from 'react'
import "./MainProductPage.css"
import Carousel from 'react-bootstrap/Carousel';
import sampleImage from "../Sources/sampleImage.jpg"
 import Container from 'react-bootstrap/Container';


const MainProductPage = () => {
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
      </div>
    )
}

export default MainProductPage
