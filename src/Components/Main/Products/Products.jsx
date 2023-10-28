import React from 'react'
import { Container, Breadcrumb } from 'react-bootstrap';

import "./Products.css"
import OurProducts from '../OurProducts/OurProducts'
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Header/Footer';
const Products = () => {
  return (
    <>
    <Header />
    <div className='ProductsTab'>
           <Breadcrumb>
             <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
             <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
           </Breadcrumb>
           <h1 style={{ textAlign: "center" ,fontFamily:" Garamond, serif" }}> Products  </h1>
         </div>
       <OurProducts />
 <Footer />
 </>
  )
}

export default Products
