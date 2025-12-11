import React from "react";
import { FaSearch } from "react-icons/fa";
import modularcss from "./Header.module.css";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className={modularcss.header}>
      
      <div className={modularcss["header-left"]}>
        <img 
          src="https://pngimg.com/uploads/netflix/netflix_PNG11.png"
          alt="Netflix Logo"
          className={modularcss.logo}
        />

        <ul className={modularcss["nav-links"]}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tv">TV Shows</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/popular">New & Popular</Link></li>
          <li><Link to="/mylist">My List</Link></li>
        </ul>

      </div>

      <div className={modularcss["header-right"]}>
        <input 
          type="text" 
          placeholder="Search"
          className={modularcss.search}
        />

        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User"
          className={modularcss["user-avatar"]}
        />

        <div className={modularcss["header-search"]}>

          <select className={modularcss["header-searchSelect"]}>
            <option>Movies</option>
          </select>

          <input
            className={modularcss["header-searchInput"]}
            type="text"
            placeholder="search Netflix"
          />

          <FaSearch className={modularcss["header-searchIcon"]} />
        </div>
      </div>

    </header>
  );
}

export default Header;
