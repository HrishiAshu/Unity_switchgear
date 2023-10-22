import React, { useState } from 'react';
import "./WhyUnity.css";
import Header from '../../Main/Layout/Header/Header';
import Footer from '../Layout/Header/Footer';
import Accordion from 'react-bootstrap/Accordion';
import { Container, Breadcrumb } from 'react-bootstrap';

const WhyUnity = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null); // Close the currently open accordion
    } else {
      setOpenAccordion(index); // Open the clicked accordion
    }
  };

  const accordionItems = Array.from({ length: 10 }, (_, index) => {
    const isOpen = openAccordion === index;

    return (
      <Accordion key={index} style={{ marginTop: '20px' }}>
        <Accordion.Item eventKey={index}>
          <Accordion.Header onClick={() => handleAccordionClick(index)}>
            Accordion Item #{index + 1}
          </Accordion.Header>
          <Accordion.Collapse eventKey={index}>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Content for Accordion Item #{index + 1}.
            </Accordion.Body>
          </Accordion.Collapse>
        </Accordion.Item>
      </Accordion>
    );
  });

  return (
    <>
      <Header />
      <div className="WhyUnity">
          <div className='UnityWhyTab'>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#">why Unity</Breadcrumb.Item>
            </Breadcrumb>
            <h1 style={{ textAlign: "center" }}>why Unity</h1>
          </div>
        <Container>

          {accordionItems}
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default WhyUnity;
