import React from 'react';
import { Card } from 'react-bootstrap'; // Importing Card component from react-bootstrap

const CardProp = ({ title, description }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CardProp;
