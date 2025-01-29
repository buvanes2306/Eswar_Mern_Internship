import React from 'react';
import './about.css';

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-tile">
          <h2 className="text-center mb-4">About Me</h2>
          <p className="lead">
            Hello! I’m a passionate software developer with a strong focus on creating seamless and dynamic web applications. 
            My journey in the tech world has been fueled by curiosity and a love for innovation.
          </p>
          <h3 className="mt-4">My Skills</h3>
          <ul className="skills-list">
            <li>Proficient in JavaScript, React, and Node.js</li>
            <li>Experience with database technologies like MongoDB and MySQL</li>
            <li>Skilled in API design and backend development</li>
            <li>Familiar with Agile development practices</li>
            <li>Knowledgeable in Machine Learning concepts</li>
          </ul>
          <h3 className="mt-4">My Interests</h3>
          <p>
            Beyond coding, I enjoy contributing to open-source projects, participating in hackathons, and exploring cutting-edge technologies. 
            I’m a lifelong learner, always seeking opportunities to grow and innovate.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
