import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import './skill.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init();
const skillsData = [
  { skill: 'Html5', level: 80 },
  { skill: 'CSS', level: 70 },
  { skill: 'Bootstrap', level: 85 },
  { skill: 'TailwindCSS', level: 50 },
  { skill: 'JavaScript', level: 80 },
  { skill: 'TypeScript', level: 50 },
  { skill: 'ReactJS', level: 80 },
  { skill: 'NextJS', level: 50 },
  { skill: 'React Redux/toolkit', level: 50 },
  { skill: 'MongoDB', level: 60 },
  { skill: 'MySQL', level: 80 },
  { skill: 'Git & Github', level: 85 },
];

const Skills = () => {
  return (
    <Container className="skills-container my-5">
      <h2 className='text-center mx-5 fs-1 fw-bolder text-primary text-decoration-underline mb-5'
        data-aos="fade-up">skills</h2>
      <Row>
        <Col xs={12} md={6}>
          {skillsData.map((item, index) => (
            <div key={index} className="skill-item my-3">
              <div className="skill-name" >{item.skill}</div>
              <ProgressBar data-aos="fade-right" now={item.level} />
            </div>
          ))}
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
          <img src="/skills.jpg" alt="Skills" className="img-fluid float-animation" data-aos="fade-left" />
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
