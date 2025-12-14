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
                <div className={modularcss["header-search"]}>

          <select className={modularcss["header-searchSelect"]}>
            <option>Homes</option>
            <option>TV Shows</option>
            <option>Movies</option>
            <option>New & Popular</option>
            <option>Actors</option>
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