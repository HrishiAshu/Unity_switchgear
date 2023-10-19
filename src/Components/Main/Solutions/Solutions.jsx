import React from 'react'
import { Container, Breadcrumb } from 'react-bootstrap';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Header/Footer';
import OurSolutions from '../OurSolutions/OurSolutions';


const Solutions = () => {
  return (
    <>
    <Header />
    <div className="solutions">
    <Container>
         <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Solutions</Breadcrumb.Item>
        </Breadcrumb>
        <h1 style={{ textAlign: "center" }}>Solutions</h1>
        <OurSolutions />
 
     </Container>
 
  </div>
  <Footer />
  </>
  )
}

export default Solutions