import React, { useState } from "react";
import "../Header.css";

const Header = () => {
  // Assuming the number of messages is stored in state
  const [messages, setMessages] = useState(5); // Example with 5 unread messages

  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = event.target.search.value;
    console.log("Search Query:", searchQuery);
    // Add your search logic here
  };

  return (
    <header className="header">
      <form className="header__search" onSubmit={handleSearch}>
        <button type="submit" className="header__search-button">
          <i className="fas fa-search"></i>
        </button>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="header__search-input"
        />
      </form>
      <nav className="header__nav">
        <a
          href="/notifications"
          title="Notifications"
          className="notification-icon"
        >
          <i className="fas fa-bell"></i>
          {messages > 0 && <div className="notification-badge">{messages}</div>}
        </a>
        <a href="/settings" title="Settings">
          <i className="fas fa-cog"></i>
        </a>
        <a href="/user" title="User Page">
          <i className="fas fa-user"></i>
        </a>
      </nav>
    </header>
  );
};

export default Header;
