// Import necessary dependencies
import React from 'react';
import './About.css';

// About component - displays company/team information
const About = () => {
  return (
    // Main container for the about page
    <div className="about">
      {/* Page title */}
      <h1>About Us</h1>
      
      {/* Main content container */}
      <div className="about-content">
        {/* Mission section */}
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to creating modern, efficient, and user-friendly web applications
            using the latest technologies and best practices in software development.
          </p>
        </div>

        {/* Team section */}
        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            Our team consists of passionate developers who are committed to delivering
            high-quality solutions that meet our clients' needs and exceed their expectations.
          </p>
        </div>

        {/* Technology stack section */}
        <div className="about-section">
          <h2>Our Technology Stack</h2>
          {/* List of technologies used */}
          <ul>
            <li>React.js for frontend development</li>
            <li>Modern CSS for styling</li>
            <li>React Router for navigation</li>
            <li>Best practices in web development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About; 