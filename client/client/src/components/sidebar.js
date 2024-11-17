import React from "react";
import "../index.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Internal Portal</h2>
      <div className="menu">
        <button className="menu-item">
          <span className="icon">🏠</span> Home
        </button>
        <button className="menu-item">
          <span className="icon">👤</span> Profile
        </button>
        <button className="menu-item">
          <span className="icon">📅</span> Calendar
        </button>
        <button className="menu-item">
          <span className="icon">📋</span> Forms
        </button>
      </div>
      <div className="welcome-box">
        <h3>Welcome to the Portal!</h3>
        <p>
          Explore the resources, stay connected, and make the most of our
          platform to achieve your goals. We're here to support you—dive in and
          make the most of it!
        </p>
      </div>
      <button className="logout-button">Logout</button>
    </div>
  );
};

export default Sidebar;
