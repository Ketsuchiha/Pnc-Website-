import React from 'react';
import { Container, Row, Col, Carousel, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Container fluid className="p-0">
        {/* Hero Carousel */}
        <Carousel>
          <Carousel.Item>
            <div className="d-block w-100 bg-success" style={{ height: '70vh' }}>
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-center text-white p-4 bg-success bg-opacity-75 rounded">
                  <h1>Welcome to Pamantasan ng Cabuyao</h1>
                  <p>Committed to excellence in higher education</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-block w-100 bg-secondary" style={{ height: '70vh' }}>
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-center text-white p-4 bg-success bg-opacity-75 rounded">
                  <h1>Diverse Academic Programs</h1>
                  <p>Offering a wide range of courses to suit your career goals</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        {/* Quick Links */}
        <Container className="my-5">
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-success">
                <Card.Body className="text-center">
                  <i className="bi bi-info-circle fs-1 text-success mb-3"></i>
                  <Card.Title className="text-success">About PNC</Card.Title>
                  <Card.Text>Learn about our mission, vision, and core values</Card.Text>
                  <Button as={Link} to="/about" variant="success">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-success">
                <Card.Body className="text-center">
                  <i className="bi bi-people fs-1 text-success mb-3"></i>
                  <Card.Title className="text-success">Administration</Card.Title>
                  <Card.Text>Meet our university officials and administrators</Card.Text>
                  <Button as={Link} to="/administration" variant="success">
                    View Administration
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-success">
                <Card.Body className="text-center">
                  <i className="bi bi-book fs-1 text-success mb-3"></i>
                  <Card.Title className="text-success">Academic Programs</Card.Title>
                  <Card.Text>Explore our diverse range of courses and colleges</Card.Text>
                  <Button as={Link} to="/courses" variant="success">
                    Browse Courses
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Home;