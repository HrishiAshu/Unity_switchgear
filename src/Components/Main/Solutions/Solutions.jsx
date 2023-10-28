import React from 'react'
import "./Solutions.css"
import { Container, Breadcrumb } from 'react-bootstrap';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Header/Footer';
import OurSolutions from '../OurSolutions/OurSolutions';


const Solutions = () => {
  return (
    <>
    <Header />
     <div className='SolutionsTab'>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Solutions</Breadcrumb.Item>
            </Breadcrumb>
            <h1 style={{ textAlign: "center" ,fontFamily:" Garamond, serif" }}> Solutions  </h1>
          </div>
        <OurSolutions />
  <Footer />
  </>
  )
}

export default Solutions
