import React from 'react';
import { Card } from 'react-bootstrap';

const AdminCard = ({ name, position, department }) => {
  return (
    <Card className="h-100 border-success">
      <Card.Body className="text-center">
        <div className="mb-3">
          <i className="bi bi-person-circle text-success" style={{ fontSize: '3rem' }}></i>
        </div>
        <Card.Title className="text-success">{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{position}</Card.Subtitle>
        <Card.Text>{department}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AdminCard;