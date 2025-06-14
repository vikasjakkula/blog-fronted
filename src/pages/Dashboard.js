import React from 'react';
import './Dashboard.css';

// Dashboard component - displays statistics and quick actions
const Dashboard = () => {
  // Sample statistics data
  const stats = [
    { title: 'Total Users', value: '1,234', change: '+12%' },
    { title: 'Revenue', value: '$45,678', change: '+8%' },
    { title: 'Active Projects', value: '23', change: '+5%' },
    { title: 'Tasks Completed', value: '89', change: '+15%' }
  ];

  return (
    // Main container for the dashboard
    <div className="dashboard">
      {/* Dashboard title */}
      <h1>Dashboard</h1>
      
      {/* Statistics grid */}
      <div className="stats-grid">
        {/* Map through stats array to create stat cards */}
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.title}</h3>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-change positive">{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Dashboard content grid */}
      <div className="dashboard-grid">
        {/* Recent activity section */}
        <div className="dashboard-card">
          <h2>Recent Activity</h2>
          <ul className="activity-list">
            {/* Activity items */}
            <li>
              <span className="activity-time">10:30 AM</span>
              <span className="activity-text">New user registration</span>
            </li>
            <li>
              <span className="activity-time">09:45 AM</span>
              <span className="activity-text">Project milestone completed</span>
            </li>
            <li>
              <span className="activity-time">09:15 AM</span>
              <span className="activity-text">New task assigned</span>
            </li>
            <li>
              <span className="activity-time">08:30 AM</span>
              <span className="activity-text">System update completed</span>
            </li>
          </ul>
        </div>

        {/* Quick actions section */}
        <div className="dashboard-card">
          <h2>Quick Actions</h2>
          <div className="quick-actions">
            {/* Action buttons */}
            <button className="action-btn">Add New User</button>
            <button className="action-btn">Create Project</button>
            <button className="action-btn">Generate Report</button>
            <button className="action-btn">View Analytics</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 