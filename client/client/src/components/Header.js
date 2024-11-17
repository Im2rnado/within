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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="white"
          >
            <path d="M10 2a8 8 0 105.293 14.293l5.707 5.707 1.414-1.414-5.707-5.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
          </svg>
        </button>

        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="header__search-input"
          style={{ color: 'white' }}
        />

      </form>

      
      <nav className="header__nav">
        <a
          href="/notifications"
          title="Notifications"
          className="notification-icon"
          style={{ color: 'white' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
          </svg>
          {messages > 0 && <div className="notification-badge">{messages}</div>}
        </a>

        <a href="/settings" title="Settings" style={{ color: 'white' }}>
          <i className="fas fa-cog"></i>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 2</svg></svg>4" width="24" height="24" fill="white">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L3.5 8.89c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.03-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
          </svg>
        </a>

        <a href="/user" title="User Page" style={{ color: 'white' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </a>

      </nav>
    </header>
  );
};

export default Header;
