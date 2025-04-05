import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import MissionVision from '../components/MissionVision';

const About = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5 text-success">About Pamantasan ng Cabuyao</h1>
      
      <Row className="mb-5">
        <Col>
          <Card className="border-success">
            <Card.Body>
              <Card.Title className="text-success">University History</Card.Title>
              <Card.Text>
                Pamantasan ng Cabuyao (PNC) is a local university in Cabuyao, Laguna, Philippines. 
                It was established to provide quality and affordable education to the residents of Cabuyao 
                and neighboring communities. PNC has grown to become a respected institution offering 
                various undergraduate programs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <MissionVision />
      
      <Row className="mt-5">
        <Col md={12}>
          <Card className="border-success">
            <Card.Body>
              <Card.Title className="text-success">Core Values</Card.Title>
              <Row>
                <Col md={4}>
                  <Card className="mb-3 border-success">
                    <Card.Body>
                      <Card.Title className="text-success">
                        <i className="bi bi-award text-success me-2"></i>
                        Excellence
                      </Card.Title>
                      <Card.Text>
                        Commitment to the highest standards of academic performance and ethical conduct.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-3 border-success">
                    <Card.Body>
                      <Card.Title className="text-success">
                        <i className="bi bi-shield-check text-success me-2"></i>
                        Integrity
                      </Card.Title>
                      <Card.Text>
                        Upholding honesty, transparency, and accountability in all endeavors.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-3 border-success">
                    <Card.Body>
                      <Card.Title className="text-success">
                        <i className="bi bi-heart text-success me-2"></i>
                        Service
                      </Card.Title>
                      <Card.Text>
                        Dedication to serving the community and contributing to national development.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;