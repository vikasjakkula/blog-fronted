import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h2>Choose Your Plan</h2>
      <div className="pricing-grid">
        {/* Pro Plan */}
        <div className="pricing-card">
          <h3>Pro</h3>
          <div className="price">
            <span className="currency">₹</span>
            <span className="amount">510</span>
            <span className="decimal">.3</span>
            <span className="period">/month</span>
          </div>
          <p className="billing">billed yearly ₹6124</p>
          <button className="subscribe-btn">Subscribe to Pro</button>
          <div className="features">
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="pricing-card featured">
          <div className="most-value">MOST VALUE</div>
          <h3>Premium</h3>
          <div className="price">
            <span className="currency">₹</span>
            <span className="amount">955</span>
            <span className="decimal">.6</span>
            <span className="period">/month</span>
          </div>
          <p className="billing">billed yearly ₹11468</p>
          <button className="subscribe-btn">Subscribe to Premium</button>
          <div className="features">
            <ul>
              <li>All Pro Features</li>
              <li>Premium Feature 1</li>
              <li>Premium Feature 2</li>
            </ul>
          </div>
        </div>

        {/* Team Plan */}
        <div className="pricing-card">
          <h3>Team</h3>
          <div className="price">
            <span className="currency">₹</span>
            <span className="amount">5121</span>
            <span className="decimal">.6</span>
            <span className="period">/month</span>
          </div>
          <p className="billing">billed yearly ₹61459</p>
          <button className="subscribe-btn">Subscribe to Team</button>
          <div className="features">
            <ul>
              <li>All Premium Features</li>
              <li>Team Feature 1</li>
              <li>Team Feature 2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 