import React, { useState } from 'react';
import "./WhyUnity.css";
import Header from '../../Main/Layout/Header/Header';
import Footer from '../Layout/Header/Footer';
import Accordion from 'react-bootstrap/Accordion';
import { Container, Breadcrumb } from 'react-bootstrap';
import Slider from '../Carousol/Slider';

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
         </Container>
      </div>
      <Footer />
    </>
  );
}

export default WhyUnity;
