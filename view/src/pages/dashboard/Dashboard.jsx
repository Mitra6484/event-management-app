import React, { useState } from 'react';
import './dashboard.css';

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('totalRevenue');

  const renderContent = () => {
    switch (selectedCategory) {
      case 'totalRevenue':
        return (
          <div className="info-card">
            <h3>Total Revenue</h3>
            <p className="info-amount">$8,500</p>
            <p>Revenue from all events this month.</p>
          </div>
        );
      case 'customerCount':
        return (
          <div className="info-card">
            <h3>Total Customers</h3>
            <p className="info-amount">1,450</p>
            <p>Total number of customers in the system.</p>
          </div>
        );
      case 'popularEvents':
        return (
          <div className="info-card">
            <h3>Popular Events</h3>
            <ul>
              <li>Event A - 500 attendees</li>
              <li>Event B - 300 attendees</li>
              <li>Event C - 250 attendees</li>
            </ul>
          </div>
        );
      case 'attendanceReport':
        return (
          <div className="info-card">
            <h3>Event Attendance Report</h3>
            <p>Reports on attendance trends for events.</p>
            {/* Add chart or report component here */}
          </div>
        );
      default:
        return <div>Select a category to view information.</div>;
    }
  };

  return (
    <div className="dashboard-container">
      <header>
        <h1>Event Dashboard</h1>
        <p>Select a category to view detailed information.</p>
      </header>
      <div className="radio-buttons">
        <input
          type="radio"
          id="totalRevenue"
          name="category"
          checked={selectedCategory === 'totalRevenue'}
          onChange={() => setSelectedCategory('totalRevenue')}
        />
        <label htmlFor="totalRevenue">Total Revenue</label>

        <input
          type="radio"
          id="customerCount"
          name="category"
          checked={selectedCategory === 'customerCount'}
          onChange={() => setSelectedCategory('customerCount')}
        />
        <label htmlFor="customerCount">Customer Count</label>

        <input
          type="radio"
          id="popularEvents"
          name="category"
          checked={selectedCategory === 'popularEvents'}
          onChange={() => setSelectedCategory('popularEvents')}
        />
        <label htmlFor="popularEvents">Popular Events</label>

        <input
          type="radio"
          id="attendanceReport"
          name="category"
          checked={selectedCategory === 'attendanceReport'}
          onChange={() => setSelectedCategory('attendanceReport')}
        />
        <label htmlFor="attendanceReport">Attendance Report</label>
      </div>

      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
