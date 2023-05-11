import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCompass } from 'react-icons/fa';
import "./home.component.css";
import Stars from"./starRating.component.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  return (
    <div className="resume">
      <div className="header">
        <h1>Rodolfo Noguera</h1>
        <h3>Web Developer</h3>
        <div className="social-icons">
          <a href="https://github.com/darkropo"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/rodolfo-noguera-67681129/?locale=en_US"><i className="fab fa-linkedin"></i></a>
          <a href="https://twitter.com/username"><i className="fab fa-twitter"></i></a>
        </div>
      </div>

      <div className="main">
      <div className="section">
          <h2>
            <FaCompass/>Summary
          </h2>
          <p>As a web developer, I am results-driven and have experience creating custom solutions for diverse industries. My skills include building responsive and user-friendly websites using technologies like Node, PHP, JavaScript, and ReactJS.</p>

          <p>In addition to website development, I have a strong background in creating and implementing RESTful API endpoints using NodeJS and MongoDB. I am also experienced in performing automated testing using Cypress, Selenium, and Postman.</p>

          <p>Along with my technical skills, I possess strong soft skills such as collaboration, communication, and problem-solving. I am a team player who enjoys working with others to deliver measurable outcomes for software applications.</p>

          <p>Outside of work, I enjoy spending time with my family and pursuing my hobbies.</p>
        </div>
        <div className="section">
          <h2>
            <FaBriefcase /> Experience
          </h2>
          <h3>Frontend Developer at ABC Company</h3>
          <p>June 2019 - Present</p>
          <ul>
            <li>Developed and maintained company website using React</li>
            <li>Collaborated with designers and backend developers</li>
            <li>Implemented responsive design using Bootstrap</li>
          </ul>
        </div>

        <div className="section">
          <h2>
            <FaGraduationCap /> Education
          </h2>
          <h3>Bachelor of Science in Computer Science</h3>
          <p>XYZ University</p>
          <p>Graduated May 2019</p>
        </div>
      </div>

      <div className="side">
          <Stars/>
      </div>
    </div>
  );
};

export default Home;