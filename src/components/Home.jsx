
// import React, { useEffect, useState } from 'react';
// import AOS from 'aos';
// import { Container, Row, Col, ProgressBar } from 'react-bootstrap'
// import { FaGithub, FaLinkedin } from 'react-icons/fa'
// import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './home.css';
// import { useNavigate } from 'react-router-dom';

// AOS.init();

// const Home = () => {
//   const [currentTitle, setCurrentTitle] = useState(0);
//   const titles = ['Web Developer', 'MERN Stack Developer', 'Frontend Developer'];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);
//   const navigate=useNavigate();
//   return (
 
//     <div className='container-fluid flex-wrap  '>
//         <Row >
//           <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center"
//             >
//             <h1 className='text-dark  cursive text1' data-aos="fade-right">Hi i'm</h1>
//             <h1 className='text-primary text2' data-aos="fade-right">Jeya Chandran </h1>
//             <h2 className=' text3 m-2 ' data-aos="fade-right">{titles[currentTitle]}</h2>
//            <Row>
//            <Col className='d-flex justify-content-center align-items-center gap-2'>
//                   <button className='btn btn-outline-primary  btn-lg' onClick={() => navigate('/contact')}  data-aos="fade-left">Contact</button>
             
                        
//                 <a href="https://github.com/jeya-chandran-jcs" target="_blank" rel="noopener noreferrer" className="icon-link"
//                 data-aos="fade-up">
//                   <FaGithub size={40} />
//                 </a>
//                 <a href="https://www.linkedin.com/in/jeya-chandran-s-1a5b70271/" target="_blank" rel="noopener noreferrer" className="icon-link ">
//                   <FaLinkedin size={40} data-aos="fade-right"/>
//                 </a>
            
//             </Col>
//            </Row>
//           </Col>
//           <Col xs={12} md={6} data-aos="fade-left">
//             <img src="/hi.jpg" alt="Jeya Chandran" className="img-fluid float-animation" />
//           </Col>
//         </Row>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { Link } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

AOS.init();

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ['Web Developer', 'Frontend Developer', 'React.js Enthusiast'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

 

  return (
    <div className="container-fluid home-container">
      <Row className="align-items-center">
        <Col xs={12} md={6} className="text-center" data-aos="fade-right">
          <h1 className="text-dark cursive text1">Hi, I'm</h1>
          <h1 className="text-primary text2">Jeya Chandran</h1>
          <h2 className="text3 mt-3 fw-bold">{titles[currentTitle]}</h2>
          <div className="d-flex justify-content-center align-items-center gap-2 mt-3">
            <button className="btn btn-outline-primary btn-lg"  data-aos="fade-left">
              <Link to="contact" activeClass="active" spy={true} smooth={true} offset={50} 
              duration={100}>Contact</Link></button>
            <a href="https://github.com/jeya-chandran-jcs" target="_blank" rel="noopener noreferrer" className="icon-link" data-aos="fade-up">
              <FaGithub size={40} />
            </a>
            <a href="https://www.linkedin.com/in/jeya-chandran-s-1a5b70271/" target="_blank" rel="noopener noreferrer" className="icon-link" data-aos="fade-right">
              <FaLinkedin size={40} />
            </a>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center my-2" data-aos="fade-left">
          <img src="/hi.jpg" alt="Jeya Chandran" className="img-fluid rounded-circle float-animation" />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
