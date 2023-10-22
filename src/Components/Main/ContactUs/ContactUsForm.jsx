import React, { useState } from 'react';
import './ContactUsForm.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../Layout/Header/Footer';
import Header from '../Layout/Header/Header';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to your server for processing (not shown in this example).
    // You should send an HTTP request to your server to handle email/WhatsApp sending.
    // After successful submission, you can reset the form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="ContactUsForm">
              <h2>Contact Us</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>123 Main Street</p>
              <p>City, Country</p>
              <p>Email: example@example.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUsForm;
