import React, { useState } from 'react';
import './OurProducts.css';

const OurProducts = () => {
  const [isFlipped, setIsFlipped] = useState(Array(9).fill(false)); // Initialize an array to keep track of the flipped state for each card

  const cardData = [
    {
      title: 'Card 1',
      description: 'Description for Card 1.',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2.',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3.',
    },
    {
      title: 'Card 4',
      description: 'Description for Card 4.',
    },
    {
      title: 'Card 5',
      description: 'Description for Card 5.',
    },
    {
      title: 'Card 6',
      description: 'Description for Card 6.',
    },
    {
      title: 'Card 7',
      description: 'Description for Card 7.',
    },
    {
      title: 'Card 8',
      description: 'Description for Card 8.',
    },
    {
      title: 'Card 9',
      description: 'Description for Card 9.',
    },
  ];

  const flipCard = (index) => {
    const newFlippedState = [...isFlipped];
    newFlippedState[index] = !newFlippedState[index];
    setIsFlipped(newFlippedState);
  };

  return (
    <div className="card-grid">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`flippable-card ${isFlipped[index] ? 'flipped' : ''}`}
          onClick={() => flipCard(index)}
        >
          <div className="card__side card__side--front">
            <h2 className="card__title">{card.title}</h2>
          </div>
          <div className="card__side card__side--back">
            <p className="card__description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurProducts;
