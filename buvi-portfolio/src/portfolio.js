import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio.css';
import About from './about';
import Contact from './contact';
import thiru from './buvi.png';

const projects = [
  {
    title: 'Responsive Web App',
    description: 'A fully responsive and dynamic web application.',
    details: 'Built with React, Bootstrap, and custom CSS for a modern user experience.'
  },
  {
    title: 'Learning API Development',
    description: 'Scalable API solutions for seamless integration.',
    details: 'Developed using Node.js, Express, and MongoDB for robust backend services.'
  },
  {
    title: 'Mobile App',
    description: 'Cross-platform mobile app development.',
    details: 'Designed for both Android and iOS with interactive UI and offline capabilities.'
  },
  {
    title: 'Machine Learning Model',
    description: 'Predictive analytics using machine learning.',
    details: 'Created using Python, TensorFlow, and visualization with Matplotlib.'
  },
  {
    title: 'Real-Time Chat Application',
    description: 'Instant messaging with WebSocket.',
    details: 'Built with React, Socket.IO, and Node.js for real-time communication.'
  }
];

function Project({ title, description, details }) {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <p className="card-text"><small>{details}</small></p>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div>
      <header>
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="image mb-3">
              <img src={thiru} alt="Profile" />
            </div>
            <div>
              <h1>BUVANES.E</h1>
              <h5>AIML Engineer</h5>
            </div>
          </div>
          <div>
            <a href="https://github.com/buvanes2306" className="text-violet mx-2">GitHub</a>
            <a href="https://www.linkedin.com/in/buvanes-e-ai-ml-241149349/" className="text-violet mx-2">LinkedIn</a>
          </div>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="#navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="about">
        <div className="container">
          <About />
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default Portfolio;

