import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img 
          src="/logo512.png" 
          alt="Netflix Logo" 
          className="logo"
        />

        <ul className="nav-links">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>

      <div className="header-right">
        <input type="text" placeholder="Search" className="search" />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User"
          className="user-avatar"
        />
      </div>
    </header>
  );
}

export default Header;
