import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const MissionVision = () => {
  return (
    <Row>
      <Col md={6}>
        <Card className="h-100 border-success">
          <Card.Body>
            <Card.Title className="text-success">
              <i className="bi bi-bullseye text-success me-2"></i>
              Mission
            </Card.Title>
            <Card.Text>
              Pamantasan ng Cabuyao is committed to provide quality, affordable, and relevant education 
              that produces highly competent graduates equipped with appropriate skills, imbued with 
              desirable values, and empowered to contribute to the sustainable development of the local 
              and global communities.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="h-100 border-success">
          <Card.Body>
            <Card.Title className="text-success">
              <i className="bi bi-eye text-success me-2"></i>
              Vision
            </Card.Title>
            <Card.Text>
              Pamantasan ng Cabuyao envisions itself as a leading local university recognized for 
              excellence in instruction, research, and community engagement that produces ethical, 
              innovative, and globally competitive professionals who are catalysts for positive change 
              in society.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MissionVision;