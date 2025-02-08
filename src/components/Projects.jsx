import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Aos from 'aos';
import './Projects.css';

Aos.init();

const nextJs={
    name:"Employee Management System",
    link:"https://employee-management-system-ten-nu.vercel.app/user/login",
    img:"images/ems.png",
    technologies:["TypeScript","NextJs","NodeJs","ExpressJs","MongoDb"]
}

const data = [
    
        {
            name: "Inventory Billing App",
            link: "https://fascinating-jalebi-1e7bb9.netlify.app/",
            img: "./images/ibapp.png",
            technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"]
        },
        {
            name: "Car Care Plus Services",
            link: "https://car-care-plus-services.netlify.app/",
            img: "./images/carcare.png",
            technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"]
        },
        {
            name: "Quick Bite Food-App",
            link: "https://quick-bite-1.netlify.app/",
            img: "./images/quickbite.png",
            technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"]
        },
        {
            name: "Zen Dashboard",
            link: "https://illustrious-daffodil-070aa1.netlify.app/",
            img: "./images/zendash.png",
            technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"]
        }
    ]

export default function Projects() {
  return (
    <Container className="my-5">
        <h2 className='text-center mx-5 fs-1 fw-bolder text-primary text-decoration-underline mb-5'
        data-aos="fade-down">Projects</h2>
        <Row>
           <Row className="d-flex justify-content-center align-items-center">
           <Col xs={12} sm={12} md={8} lg={8}  className=" mb-5">
                
                <Card className="bg-light border-dark shadow" data-aos="fade-up">
                        <Card.Img variant="top" src={nextJs.img} alt={nextJs.name} />
                        <hr/>
                        <Card.Body className="">
                            <Card.Title className='lead fw-bolder '>{nextJs.name}</Card.Title>
                            <Card.Text className="bg-light">
                                 {nextJs.technologies.join(', ')}
                            </Card.Text>
                            <a href={nextJs.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                View Project &gt;&gt;
                            </a>
                        </Card.Body>
                   
                </Card>
            </Col>
           </Row>
            {data.map((project, index) => (
                <Col xs={12} md={3}  key={index} className="mb-4">
                    <Card className="bg-light border-dark shadow" data-aos="fade-up">
                        <Card.Img variant="top" src={project.img} alt={project.name} />
                        <hr/>
                        <Card.Body className="">
                            <Card.Title className='lead fw-bolder '>{project.name}</Card.Title>
                            <Card.Text className="bg-light">
                                 {project.technologies.join(', ')}
                            </Card.Text>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                View Project &gt;&gt;
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        
    </Container>
  )
}
