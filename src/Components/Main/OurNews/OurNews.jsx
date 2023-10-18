import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

import "./OurNews.css"
import sampleImage from "../../Main/Sources/sampleImage.jpg"

const OurNews = () => {
  const newsData = [
    {
      title: 'News Title 1',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas cupiditate molestiae impedit exercitationem recusandae expedita earum, id eligendi accusamus deleniti..',
    
    },
    {
      title: 'News Title 2',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas cupiditate molestiae impedit exercitationem recusandae expedita earum, id eligendi accusamus deleniti..',
     
    },
    {
      title: 'News Title 3',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas cupiditate molestiae impedit exercitationem recusandae expedita earum, id eligendi accusamus deleniti..',
    
    },
   ];


  return (
    <div className='OurNews'>
       <Container>
      <Row>
        {newsData.map((news, index) => (
          <Col key={index} md={4} sm={6}>
            <Card className="News-card" style={{ marginBottom: '20px' }}>
              <Card.Img variant="top" src={sampleImage} />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    
    </div>
  )
}

export default OurNews