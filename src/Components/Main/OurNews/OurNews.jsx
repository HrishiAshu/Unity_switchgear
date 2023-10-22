import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import './OurNews.css';
import sampleImage from '../../Main/Sources/sampleImage.jpg';

const OurNews = () => {
  const [flippedCard, setFlippedCard] = useState(null);

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

  const handleCardClick = (index) => {
    setFlippedCard(index);
  };

  return (
    <div className="OurNews">
      <Container>
        <Row>
          {newsData.map((news, index) => (
            <Col key={index} md={4} sm={6}>
              <Card
                className={`News-card ${flippedCard === index ? 'flipped' : ''}`}
                style={{ marginBottom: '20px' }}
                onClick={() => handleCardClick(index)}
              >
                <div className="card-front">
                  <Card.Img variant="top" src={sampleImage} />
                  <Card.Body>
                    <Card.Title>{news.title}</Card.Title>
                    <Card.Text>Click for Description</Card.Text>
                  </Card.Body>
                </div>
                <div className="card-back">
                  <Card.Body>
                    <Card.Title>Description</Card.Title>
                    <Card.Text>{news.description}</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurNews;
