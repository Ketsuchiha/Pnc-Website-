import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      {/* University Header with Logo and Quick Info */}
      <div className="bg-success text-white py-2">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="d-flex align-items-center">
                <i className="bi bi-building fs-4 me-2"></i>
                <span className="fw-bold">Pamantasan ng Cabuyao</span>
              </div>
            </Col>
            <Col md={6} className="text-md-end">
              <div className="d-inline-block me-3">
                <i className="bi bi-envelope me-1"></i>
                <span>info@pnc.edu.ph</span>
              </div>
              <div className="d-inline-block">
                <i className="bi bi-telephone me-1"></i>
                <span>(049) 123-4567</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Hero Carousel */}
      <Carousel fade>
        <Carousel.Item>
          <div 
            className="d-block w-100 bg-success" 
            style={{ 
              height: '60vh',
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-center text-white p-4">
                <h1 className="display-4 fw-bold">Welcome to PNC</h1>
                <p className="lead">Excellence in Education, Leadership in Innovation</p>
                <Link to="/about" className="btn btn-success btn-lg mt-3">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div 
            className="d-block w-100 bg-secondary" 
            style={{ 
              height: '60vh',
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-center text-white p-4">
                <h1 className="display-4 fw-bold">Explore Our Programs</h1>
                <p className="lead">Discover courses that will shape your future</p>
                <Link to="/courses" className="btn btn-success btn-lg mt-3">
                  View All Courses
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* University Highlights */}
      <div className="bg-light py-4 border-bottom">
        <Container>
          <Row className="text-center">
            <Col md={4}>
              <div className="p-3">
                <i className="bi bi-award-fill text-success fs-1 mb-2"></i>
                <h5 className="fw-bold">Award-Winning Faculty</h5>
                <p>Our faculty members are recognized for their excellence in teaching and research.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3">
                <i className="bi bi-globe text-success fs-1 mb-2"></i>
                <h5 className="fw-bold">Global Partnerships</h5>
                <p>We collaborate with institutions worldwide to provide global opportunities.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3">
                <i className="bi bi-people-fill text-success fs-1 mb-2"></i>
                <h5 className="fw-bold">Vibrant Community</h5>
                <p>Join a diverse and inclusive community of learners and leaders.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header;