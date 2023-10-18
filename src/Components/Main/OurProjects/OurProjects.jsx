import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import sampleImage from "../../Main/Sources/sampleImage.jpg"

const images = [
    sampleImage,
    sampleImage,
    sampleImage,
    sampleImage,
    sampleImage,
    sampleImage,


];

const OurProjects = () => {
    return (
        <div className="OurProjects">
            <Container>
                <h2 style={{ textAlign: "center" }}>Our Projects</h2>
                <Row>
                    {images.map((image, index) => (
                        <Col key={index} xs={12} sm={6} md={4}>
                            <Image className='service-card' style={{ width: "70%" }} src={image} rounded />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default OurProjects;
