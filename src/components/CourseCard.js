import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';

const CourseCard = ({ name, duration, majors }) => {
  return (
    <Card className="h-100 border-success">
      <Card.Body>
        <Card.Title className="text-success">
          <i className="bi bi-bookmark-check text-success me-2"></i>
          {name}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <Badge bg="success">{duration}</Badge>
        </Card.Subtitle>
        {majors && (
          <>
            <Card.Text>Majors:</Card.Text>
            <ListGroup variant="flush">
              {majors.map((major, index) => (
                <ListGroup.Item key={index}>
                  <i className="bi bi-arrow-right-circle text-success me-2"></i>
                  {major}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default CourseCard;