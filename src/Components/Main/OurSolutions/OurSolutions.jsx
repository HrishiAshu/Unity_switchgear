import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./OurSolutions.css"
import { Container } from 'react-bootstrap';
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row'


const OurSolutions = () => {
    const splutions = [
        { id: 1, name: 'Service 1', Desc: "DB Box, Fan, HRC Fuse, Meter, Industrial Light Shed, Cable Tray & Trunking System, Switch & Sockets, LED Street Light, MCCB, MCB, Contractors, ACB, ELCB, MPCB, RCCB, RCBO" },
        { id: 2, name: 'Service 2', Desc: "DB Box, Fan, HRC Fuse, Meter, Industrial Light Shed, Cable Tray & Trunking System, Switch & Sockets, LED Street Light, MCCB, MCB, Contractors, ACB, ELCB, MPCB, RCCB, RCBO" },
        { id: 3, name: 'Service 3', Desc: "DB Box, Fan, HRC Fuse, Meter, Industrial Light Shed, Cable Tray & Trunking System, Switch & Sockets, LED Street Light, MCCB, MCB, Contractors, ACB, ELCB, MPCB, RCCB, RCBO" },
        { id: 4, name: 'Service 4', Desc: "DB Box, Fan, HRC Fuse, Meter, Industrial Light Shed, Cable Tray & Trunking System, Switch & Sockets, LED Street Light, MCCB, MCB, Contractors, ACB, ELCB, MPCB, RCCB, RCBO" },
        { id: 5, name: 'Service 5', Desc: "DB Box, Fan, HRC Fuse, Meter, Industrial Light Shed, Cable Tray & Trunking System, Switch & Sockets, LED Street Light, MCCB, MCB, Contractors, ACB, ELCB, MPCB, RCCB, RCBO" },
        { id: 6, name: 'Service 6', Desc: "DB Box, Fan, HRC Fuse, Meter, Industrial Light Shed, Cable Tray & Trunking System, Switch & Sockets, LED Street Light, MCCB, MCB, Contractors, ACB, ELCB, MPCB, RCCB, RCBO" },
        { id: 7, name: 'Service 7', Desc: "DB Box, Fan, HRC Fuse, Meter, Industrial Light Shed, Cable Tray & Trunking System, Switch & Sockets, LED Street Light, MCCB, MCB, Contractors, ACB, ELCB, MPCB, RCCB, RCBO" },
        { id: 8, name: 'Service 8', Desc: "DB Box, Fan, HRC Fuse, Meter, Industrial Light Shed, Cable Tray & Trunking System, Switch & Sockets, LED Street Light, MCCB, MCB, Contractors, ACB, ELCB, MPCB, RCCB, RCBO" },
        { id: 9, name: 'Service 9', Desc: "DB Box, Fan, HRC Fuse, Meter, Industrial Light Shed, Cable Tray & Trunking System, Switch & Sockets, LED Street Light, MCCB, MCB, Contractors, ACB, ELCB, MPCB, RCCB, RCBO" },
    ];
    return (
        <div className='OurSolutionssHomePage'>
            <Container >
                <h2 style={{textAlign:"center"}} >Our Solutions</h2>

                <Row>
                    {splutions.map((solution) => (
                        <Col key={solution.id} xs={12} sm={6} md={4}>



                            <Card className='service-card ' style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Low Voltage Solution</Card.Title>
                                    <Card.Text>
                                        DB Box, Fan, HRC Fuse, Meter, Industrial Light Shed, Cable Tray & Trunking System, Switch & Sockets, LED Street Light, MCCB, MCB, Contractors, ACB, ELCB, MPCB, RCCB, RCBO
                                    </Card.Text>
                                    <Button variant="primary">View More</Button>
                                </Card.Body>
                            </Card>


                        </Col>


                    ))}
                </Row>

            </Container>


        </div>
    )
}

export default OurSolutions
