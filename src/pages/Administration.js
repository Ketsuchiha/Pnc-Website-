import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AdminCard from '../components/AdminCard';

const Administration = () => {
  const universityOfficials = [
    {
      id: 1,
      name: 'Dr. Juan Dela Cruz',
      position: 'University President',
      department: 'Office of the President'
    },
    {
      id: 2,
      name: 'Dr. Maria Santos',
      position: 'Vice President for Academic Affairs',
      department: 'Academic Affairs'
    }
  ];

  const collegeDeans = [
    {
      id: 1,
      name: 'Dr. Robert Lim',
      position: 'Dean',
      department: 'College of Computing Studies'
    },
    {
      id: 2,
      name: 'Dr. Anna Reyes',
      position: 'Dean',
      department: 'College of Arts and Sciences'
    },
    {
      id: 3,
      name: 'Dr. Carlos Garcia',
      position: 'Dean',
      department: 'College of Business Administration'
    },
    {
      id: 4,
      name: 'Dr. Lourdes Tan',
      position: 'Dean',
      department: 'College of Health Allied Sciences'
    },
    {
      id: 5,
      name: 'Dr. Eduardo Cruz',
      position: 'Dean',
      department: 'College of Education'
    },
    {
      id: 6,
      name: 'Dr. Ricardo Mendoza',
      position: 'Dean',
      department: 'College of Engineering'
    }
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5 text-success">University Administration</h1>
      
      <h2 className="text-success mb-4">
        <i className="bi bi-person-badge text-success me-2"></i>
        University Officials
      </h2>
      <Row className="g-4 mb-5">
        {universityOfficials.map(official => (
          <Col key={official.id} md={6} lg={4}>
            <AdminCard 
              name={official.name}
              position={official.position}
              department={official.department}
            />
          </Col>
        ))}
      </Row>
      
      <h2 className="text-success mb-4">
        <i className="bi bi-people text-success me-2"></i>
        College Deans
      </h2>
      <Row className="g-4">
        {collegeDeans.map(dean => (
          <Col key={dean.id} md={6} lg={4}>
            <AdminCard 
              name={dean.name}
              position={dean.position}
              department={dean.department}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Administration;