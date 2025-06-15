// Import necessary dependencies
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

// Contact component - handles the contact form and information
const Contact = () => {
  // State to manage form data and toast visibility
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_chkwhu9',     // We still need this from Email Services
      'template_7th8x77',    // Your Template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'ETg6Pru5Pc4QVAXX1'    // Your Public Key
    )
    .then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      alert('Failed to send message: ' + error.text);
    });
  };

  return (
    // Main container for the contact page
    <div className="contact">
      {/* Toast notification */}
      {showToast && (
        <div className="toast">
          <span className="toast-icon">✅</span>
          Message Sent Successfully!
        </div>
      )}
      <h1>Contact Me ❤️‍🔥</h1>
      <div className="contact-container">
        {/* Contact form section */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          {/* Email input field */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {/* Message textarea */}
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          {/* Submit button */}
          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        {/* Contact information section */}
        <div className="contact-info">
          <h2>Connect Me ❤️‍🔥</h2>
          <div className="social-links">
            <a href="https://x.com/jakkula_vi60475" target="_blank" rel="noopener noreferrer">X (Twitter): @jakkula_vi60475</a>
            <a href="https://github.com/vikasjakkula" target="_blank" rel="noopener noreferrer">GitHub: github.com/vikasjakkula</a>
            <a href="mailto:vikasjakkula08@gmail.com">Email: vikasjakkula08@gmail.com</a>
            <a href="https://www.reddit.com/user/Relevant_Whole2540" target="_blank" rel="noopener noreferrer">Reddit: u/Relevant_Whole2540</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 