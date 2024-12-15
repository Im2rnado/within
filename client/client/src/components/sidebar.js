import React from "react";
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink to="/home">
        <img className="logo" src="/Eslsca-Logo.png" />
      </NavLink>
      {/* Pages' Buttons */}
      <div className="menu">
        {/* change the icons to something else */}
        <NavLink to="/home" className={"menu-item"}>
          <span className="icon">🏠</span> Home
        </NavLink>
        <NavLink to="/profile" className={"menu-item"}>
          <span className="icon">👤</span> Profile
        </NavLink>
        <NavLink to="/posts" className={"menu-item"}>
          <span className="icon">📋</span> Posts
        </NavLink>
        <NavLink to="/announcements" className={"menu-item"}>
          <span className="icon">📢</span> Announcements
        </NavLink>
      </div>

      <NavLink to="/add-post" className={"logout-button"}>
        <span className="icon">✙</span>Add Post
      </NavLink>

      <div className="welcome-box">
        <h3>Welcome to the Portal!</h3>
        <p>
          Explore the resources, stay connected, and make the most of our
          platform to achieve your goals. We're here to support you—dive in and
          make the most of it!
        </p>
      </div>
      {/* Logout Button */}
      <NavLink to="/login" className={"logout-button"}>Logout</NavLink>
    </div>
  );
};