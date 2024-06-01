// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

// HTML Structure
const HomePage = () => (
  <div>
    <h1>Welcome to My Portfolio</h1>
    <p>Thank you for visiting my portfolio website. Feel free to explore!</p>
    <Link to="/about">About Me</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/services">Services</Link>
    <Link to="/contact">Contact Me</Link>
  </div>
);

const AboutPage = () => (
  <div>
    <h1>About Me</h1>
    <p>My name is [Your Name]. I am a [Your Profession] based in [Your Location].</p>
    <a href="/path/to/resume.pdf">Download Resume</a>
  </div>
);

const ProjectsPage = () => (
  <div>
    <h1>Projects</h1>
    <div className="project">
      <img src="/path/to/project1.jpg" alt="Project 1" />
      <p>Description of Project 1</p>
    </div>
    <div className="project">
      <img src="/path/to/project2.jpg" alt="Project 2" />
      <p>Description of Project 2</p>
    </div>
    <div className="project">
      <img src="/path/to/project3.jpg" alt="Project 3" />
      <p>Description of Project 3</p>
    </div>
  </div>
);

// Services Page Component
const ServicesPage = () => (
  <div>
    <h1>Services</h1>
    <div className="service">
      <img src="/path/to/service1.jpg" alt="Service 1" />
      <p>General Programming</p>
    </div>
    <div className="service">
      <img src="/path/to/service2.jpg" alt="Service 2" />
      <p>Web Development</p>
    </div>
    <div className="service">
      <img src="/path/to/service3.jpg" alt="Service 3" />
      <p>Mobile Apps</p>
    </div>
  </div>
);

// Contact Page Component
const ContactPage = () => (
  <div>
    <h1>Contact Me</h1>
    <div className="contact-info">
      <p>Email: example@example.com</p>
      <p>Phone: 123-456-7890</p>
      <p>Address: 123 Main St, City, Country</p>
    </div>
    <form>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="text" placeholder="Contact Number" />
      <input type="email" placeholder="Email Address" />
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
);

// Main App Component
const App = () => (
  <Router>
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/contact" component={ContactPage} />
    </div>
  </Router>
);

export default App;
