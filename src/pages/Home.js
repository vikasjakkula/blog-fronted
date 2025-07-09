// Import necessary dependencies
import React, { useState } from 'react';
import './Home.css';
import { FaSearch } from 'react-icons/fa';

// Home component - the landing page of the application
const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    // Main container for the home page
    <div className="home">
      {/* Search Bar */}
      <div className="search-container">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <FaSearch className="search-icon" />
          </button>
        </form>
      </div>

      {/* Main heading */}
      <h1>Welcome To My Blog</h1>
      <img 
        src="/Dp.png" 
        alt="Dp" 
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          objectFit: 'cover',
          display: 'block',
          margin: '20px auto'
        }}
      />
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
          <p>NGIT i.e,Neil Gogte Institute of Technology</p>
          <p>2025-2029</p>
        </div>
        {/* Feature card 4 */}
        <div className="feature-card">
          <h2>Hustle Mode</h2>
          <p>Start grow Inverst !</p>
          <p>2029-2033</p>
        </div>
      </div>
      <div className="feature-card" style={{ marginTop: '3rem' }}>
        <h2>What's Next?</h2>
        <p>2035 & Beyond</p>
        <p>Innovate, lead, and build impactful tech solutions.</p>
        <p>Study the startup's : build grow inverst.</p>
      </div>

      </div>
      <div className="feature-card" style={{ marginTop: '3rem' }}>
        <h2>Dream</h2>
        <p>20??</p>
        <p>Finally Grand Delivary Of Brand New AMG G63 ❤️‍🔥</p>
        <p>End !</p>
      </div>
      </div>
  );
}

export default Home;
