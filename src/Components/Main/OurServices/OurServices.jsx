import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row'
import "./OurServices.css"


const OurServices = () => {
  const courses = [
    {
      title: 'UI/Web&Graph  ',
      startDate: '04.11.2022',
    },
    {
      title: 'Mobile Design',
    },
    {
      title: 'Annual package',
      startDate: '04.11.2022',
    },
    {
      title: 'Graphic Design',
      startDate: '04.11.2022',
    },
    {
      title: 'Motion Design',
      startDate: '30.11.2022',
    },
    {
      title: 'Front-end development ',
    },
    {
      title: 'Digital Marketing',
    },
    {
      title: 'Interior Design',
      startDate: '31.10.2022',
    },
    {
      title: 'Backend Design',
      startDate: '31.10.2022',
    }
  ];
  
  return (
    <div className="OurServicesHomePage">
 
 <div className="ag-format-container">
      <h2 style={{ textAlign: "center" }}>Our Services</h2>
      <div className="ag-courses_box">
        {courses.map((course, index) => (
          <div className="ag-courses_item" key={index}>
            <a className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">{course.title}</div>
              
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default OurServices
