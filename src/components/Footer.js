import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-success text-white mt-5 py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Pamantasan ng Cabuyao</h5>
            <p>
              Banay-Banay, Cabuyao, Laguna<br />
              Philippines
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/about" className="text-white">About PNC</Link></li>
              <li><Link to="/administration" className="text-white">Administration</Link></li>
              <li><Link to="/courses" className="text-white">Courses</Link></li>
              <li><Link to="/contact" className="text-white">Contact</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Connect With Us</h5>
            <div className="mb-3">
              <a href="https://facebook.com/pncofficial" className="text-white me-3">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="https://twitter.com/pncofficial" className="text-white me-3">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="https://instagram.com/pncofficial" className="text-white me-3">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="https://youtube.com/pncofficial" className="text-white">
                <i className="bi bi-youtube fs-4"></i>
              </a>
            </div>
            <p>© {new Date().getFullYear()} Pamantasan ng Cabuyao. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;