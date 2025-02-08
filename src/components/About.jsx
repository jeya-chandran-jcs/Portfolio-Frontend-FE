import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './about.css';

Aos.init();
export default function About() {
  return (
    <div className="py-5">
      <div className="container-fluid home-container">
        <h2 className="text-center mx-5 fs-1 fw-bolder text-primary text-decoration-underline mb-5"
          data-aos="fade-up">
          About
        </h2>

        <Row className="align-items-center">
          <Col xs={12} lg={4} className="mb-4 mb-lg-0">
            <img src="/about.jpg" alt="About" className="img-fluid rounded shadow float-animation" data-aos="fade-right"/>
          </Col>
          <Col xs={12} lg={8} className="lead">
            <p data-aos="fade-right">
              Hello! I'm Jeya Chandran S, a passionate **Frontend Developer** with expertise in crafting modern, responsive, and dynamic web applications.  
              I specialize in building engaging user interfaces that enhance the user experience.
            </p>
            <hr />
            <p data-aos="fade-right">
              My expertise includes **HTML, CSS, JavaScript, React.js, Next.js**, and modern **CSS frameworks** like **Bootstrap and Tailwind CSS**.  
              I focus on creating sleek, accessible, and high-performing UIs that work across all devices.
            </p>
            <hr />
            <p data-aos="fade-right">
              I love working with **animations, interactive designs, and performance optimizations** to enhance usability.  
              My goal is to build pixel-perfect, responsive websites that provide a seamless experience.
            </p>
            <hr />
            <p data-aos="fade-right">
              If you're looking for a frontend developer who can bring your UI ideas to life,  
              let's collaborate and create something amazing together!
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
