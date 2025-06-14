// Import necessary dependencies
import React, { useState } from 'react';
import './Contact.css';

// Contact component - handles the contact form and information
const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    // Main container for the contact page
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-container">
        {/* Contact information section */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you. Please fill out the form or use our contact information below.</p>
          {/* Contact details */}
          <div className="info-item">
            <h3>Email</h3>
            <p>contact@example.com</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="info-item">
            <h3>Address</h3>
            <p>123 React Street, Web City, JS 12345</p>
          </div>
        </div>

        {/* Contact form section */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Name input field */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          {/* Email input field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* Message textarea */}
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          {/* Submit button */}
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 