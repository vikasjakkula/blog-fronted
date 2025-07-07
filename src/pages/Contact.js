// Import necessary dependencies
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

// Contact component - handles the contact form and information
const Contact = () => {
  // State to manage form data and toast visibility
  const [formData, setFormData] = useState({
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
      'YOUR_SERVICE_ID',     // Replace with your Service ID from EmailJS
      'YOUR_TEMPLATE_ID',    // Replace with your Template ID from EmailJS
      {
        user_email: formData.email,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'      // Replace with your Public Key from EmailJS
    )
    .then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      setFormData({ email: '', message: '' });
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
        {/* Contact information section */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>I'd love to hear from you. Please fill your opinion out there through X or Reddit</p>
          {/* Contact details */}
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:vikasjakkula08@gmail.com">vikasjakkula08@gmail.com</a>
            </li>
            <li>
              <strong>Social Media</strong>
              <ul>
                <li>
                  X (Twitter):{' '}
                  <a
                    href="https://twitter.com/vikas_070v"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @vikas_070v
                  </a>
                </li>
                <li>
                  GitHub:{' '}
                  <a
                    href="https://github.com/vikasjakkula"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/vikasjakkula
                  </a>
                </li>
                <li>
                  Reddit:{' '}
                  <a
                    href="https://www.reddit.com/user/Relevant_Whole2540"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    u/Relevant_Whole2540
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Contact form section */}
        <form className="contact-form" onSubmit={handleSubmit}>
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
      </div>
    </div>
  );
};

export default Contact; 