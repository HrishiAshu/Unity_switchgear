import React from 'react'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Header/Footer'
import Breadcrumb from "react-bootstrap/Breadcrumb"
import sampleImage from "../Sources/sampleImage.jpg"
import Container from 'react-bootstrap/Container';
import { Image, Row, Col, Button } from 'react-bootstrap';

const OurHistory = () => {
    return (<>
        <Header />
        <div className='Ourhistory'>
            <div className='UnityWhyTab'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Our History</Breadcrumb.Item>
                </Breadcrumb>
                <h1 style={{ textAlign: "center" }}>Our History</h1>
            </div>

            <div className="HomepageWhoWeAre">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <h2>Who we are</h2>
                            <p>
                                Some text or description about the content goes here.
                            </p>
                            {/* <Button variant="primary">Read More</Button> */}
                        </Col>
                        <Col xs={12} md={6}>
                            {/* Image 2 */}
                            <Image src={sampleImage} thumbnail />
                        </Col>
                    </Row>
                </Container>
            </div>        </div>
        <Footer />
    </>
    )
}

export default OurHistory
