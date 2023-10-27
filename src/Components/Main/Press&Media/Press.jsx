import React from 'react'
import "./Press.css"
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Header/Footer'
import OurNews from '../OurNews/OurNews'
import { Container, Breadcrumb } from 'react-bootstrap';



const Press = () => {
    return (
        <>
        <Header />
         <div className='SolutionsTab'>
                <Breadcrumb>
                  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="#">Solutions</Breadcrumb.Item>
                </Breadcrumb>
                <h1 style={{ textAlign: "center" ,fontFamily:" Garamond, serif" }}> Press & Media  </h1>
              </div>
            <OurNews />
      <Footer />
      </>
    )
}

export default Press
