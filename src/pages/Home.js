// Import necessary dependencies
import React from 'react';
import './Home.css';

// Home component - the landing page of the application
const Home = () => {
  return (
    // Main container for the home page
    <div className="home">
      {/* Main heading */}
      <h1>Welcome To My Blog</h1>
      {/* Introduction text */}
      <p>This modern is just for testing purposes , Checkout My page please</p>
      <p>Myself Vikas Yadav</p>
      <p>I am 17yr's old </p>
      
      {/* Features section with cards */}
      
      <div className="features-container ">
      <div className="features">
        {/* Feature card 1 */}
        <div className="feature-card">
          <h2>School</h2>
          <p>Bhashyam high school</p>
          <p>2021-2023</p>
        </div>
        {/* Feature card 2 */}
        <div className="feature-card">
          <h2>Intermediate</h2>
          <p>Nano jr.cllg</p>
          <p>2023-2025</p>
        </div>
        {/* Feature card 3 */}
        <div className="feature-card">
          <h2>Engineering</h2>
          <p>CBIT</p>
          <p>2025-2029</p>
        </div>
      </div>
      <div className="feature-card m-4">
        <h2>Business</h2>
        <p>2029-2033</p>
      </div>
      </div>
    </div>
  );
};



export default Home;
