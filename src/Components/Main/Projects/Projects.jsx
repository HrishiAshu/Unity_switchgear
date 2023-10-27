import React from 'react'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Header/Footer'
import { Breadcrumb } from 'react-bootstrap'
import OurProjects from '../OurProjects/OurProjects'
import "./Projects.css"

const Projects = () => {
    return (
        <>
            <Header />
            <div className='ProductsTab'>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
                </Breadcrumb>
    
                <h1 style={{ textAlign: "center" , fontFamily:" Garamond, serif"  }}> Projects  </h1>
            </div>
            <div className="TabProject">

                <OurProjects />
            </div>
            <Footer />
        </>
    )
}

export default Projects
