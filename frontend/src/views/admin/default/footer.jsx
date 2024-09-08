import React, { useState } from 'react';
import './footer.css';

const Footer = () => {
  const [feedback, setFeedback] = useState('');
  
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    setFeedback('');  // Clear feedback form
  };

  return (
    <footer className="footer-container">
      {/* User Feedback Section */}
      <div className="footer-section">
        <h3>User Feedback</h3>
        <form onSubmit={handleFeedbackSubmit} className="feedback-form">
          <textarea
            placeholder="Your feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
      </div>

      {/* Organization Analysis Links */}
      <div className="footer-section">
        <h3>Organization Analysis</h3>
        <ul className="org-links">
          <li><a href="#total-projects">Total Projects</a></li>
          <li><a href="#upcoming-events">Upcoming Events</a></li>
          <li><a href="#org-analytics">Overall Analytics</a></li>
        </ul>
      </div>

      {/* Website Analysis */}
      <div className="footer-section">
        <h3>Website Analysis</h3>
        <ul className="website-analytics">
          <li>Most Used Feature: Qualtrics</li>
          <li>Website Traffic: 120K visits this month</li>
          <li>Top Countries: US, UK, India</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
