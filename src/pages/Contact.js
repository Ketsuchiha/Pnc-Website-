import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5 text-success">Contact Us</h1>
      
      <Row>
        <Col md={6}>
          <div className="mb-5">
            <h3 className="text-success">
              <i className="bi bi-geo-alt text-success me-2"></i>
              Pamantasan ng Cabuyao
            </h3>
            <p>
              <i className="bi bi-geo-fill text-success me-2"></i>
              <strong>Address:</strong> Banay-Banay, Cabuyao, Laguna, Philippines
            </p>
            <p>
              <i className="bi bi-telephone text-success me-2"></i>
              <strong>Telephone:</strong> (049) 123-4567
            </p>
            <p>
              <i className="bi bi-envelope text-success me-2"></i>
              <strong>Email:</strong> info@pnc.edu.ph
            </p>
            <p>
              <i className="bi bi-clock text-success me-2"></i>
              <strong>Office Hours:</strong> Monday to Friday, 8:00 AM to 5:00 PM
            </p>
          </div>
          
          <div>
            <h3 className="text-success">
              <i className="bi bi-map text-success me-2"></i>
              Campus Map
            </h3>
            <div className="ratio ratio-16x9 border border-success rounded">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.123456789012!2d121.12345678901234!3d14.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDA3JzI0LjQiTiAxMjHCsDA3JzI0LjQiRQ!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph" 
                title="PNC Campus Map"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </Col>
        
        <Col md={6}>
          <Card className="border-success">
            <Card.Body>
              <Card.Title className="text-success">
                <i className="bi bi-send text-success me-2"></i>
                Send Us a Message
              </Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Enter subject" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                </Form.Group>
                
                <Button variant="success" type="submit">
                  <i className="bi bi-send me-2"></i>
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;