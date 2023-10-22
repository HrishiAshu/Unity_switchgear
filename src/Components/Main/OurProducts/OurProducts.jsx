import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './OurProducts.css';

const OurProducts = () => {
  const services = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' },
    { id: 6, name: 'Product 6' },
    { id: 7, name: 'Product 7' },
    { id: 8, name: 'Product 8' },
    { id: 9, name: 'Product 9' },
  ];

  return (
    <div className="OurServicesHomePage">
      <Container>
        <h2 style={{ textAlign: "center" }}>Our Products</h2>
        <Row>
          {services.map((service) => (
            <Col key={service.id} xs={12} sm={6} md={4}>
              <Card className="product-card">
                <Card.Body>
                  <Card.Title>{service.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurProducts;
