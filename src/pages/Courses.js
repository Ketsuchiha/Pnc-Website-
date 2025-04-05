import React from 'react';
import { Container, Accordion, Row, Col } from 'react-bootstrap';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const colleges = [
    {
      id: 1,
      name: 'College of Arts and Sciences',
      programs: [
        { id: 1, name: 'Bachelor of Science in Psychology', duration: '4 years' }
      ]
    },
    {
      id: 2,
      name: 'College of Business, Accountancy and Administration',
      programs: [
        { id: 1, name: 'Bachelor of Science in Accountancy', duration: '4 years' },
        { 
          id: 2, 
          name: 'Bachelor of Science in Business Administration', 
          duration: '4 years',
          majors: ['Financial Management', 'Marketing Management']
        }
      ]
    },
    {
      id: 3,
      name: 'College of Computing Studies',
      programs: [
        { id: 1, name: 'Bachelor of Science in Computer Science', duration: '4 years' },
        { id: 2, name: 'Bachelor of Science in Information Technology', duration: '4 years' }
      ]
    },
    {
      id: 4,
      name: 'College of Education',
      programs: [
        { id: 1, name: 'Bachelor of Elementary Education', duration: '4 years' },
        { 
          id: 2, 
          name: 'Bachelor of Secondary Education', 
          duration: '4 years',
          majors: ['English', 'Filipino', 'Mathematics', 'Social Sciences']
        }
      ]
    },
    {
      id: 5,
      name: 'College of Engineering',
      programs: [
        { id: 1, name: 'Bachelor of Science in Computer Engineering', duration: '4 years' },
        { id: 2, name: 'Bachelor of Science in Electronics Engineering', duration: '4 years' },
        { id: 3, name: 'Bachelor of Science in Industrial Engineering', duration: '4 years' }
      ]
    },
    {
      id: 6,
      name: 'College of Health and Allied Sciences',
      programs: [
        { id: 1, name: 'Bachelor of Science in Nursing', duration: '4 years' }
      ]
    },
    {
      id: 7,
      name: 'Graduate School',
      programs: [
        { 
          id: 1, 
          name: 'Master of Arts in Education', 
          duration: '2 years',
          majors: ['Administration and Supervision']
        },
        { id: 2, name: 'Master of Arts in Psychology', duration: '2 years' },
        { id: 3, name: 'Master in Business Administration', duration: '2 years' }
      ]
    }
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5 text-success">Academic Programs</h1>
      
      <Accordion defaultActiveKey="0" flush>
        {colleges.map((college, index) => (
          <Accordion.Item key={college.id} eventKey={index.toString()} className="mb-3 border-success">
            <Accordion.Header className="bg-success bg-opacity-10">
              <h3 className="text-success m-0">
                <i className="bi bi-building text-success me-2"></i>
                {college.name}
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="g-4">
                {college.programs.map(program => (
                  <Col key={program.id} md={6}>
                    <CourseCard 
                      name={program.name} 
                      duration={program.duration} 
                      majors={program.majors} 
                    />
                  </Col>
                ))}
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default Courses;