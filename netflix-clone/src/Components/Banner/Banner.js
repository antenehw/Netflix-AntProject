import React, { useEffect, useState } from "react";
import axios from "axios";
import { requests } from "../../api/tmdb";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState(null);

useEffect(() => {
  async function fetchData() {
    try {
      const baseURL = "https://api.themoviedb.org/3";
      const request = await axios.get(baseURL + requests.fetchNetflixOriginals);

      const results = request?.data?.results;

      if (Array.isArray(results) && results.length > 0) {
        const randomMovie =
          results[Math.floor(Math.random() * results.length)];

        setMovie(randomMovie);
      } else {
        console.warn("Banner: No results returned from TMDB", request.data);
        setMovie(null);
      }
    } catch (err) {
      console.error("Banner fetch failed:", err);
      setMovie(null);
    }
  }

  fetchData();
}, []);


  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <p className="banner_description">
          {movie?.overview}
        </p>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">More Info</button>
        </div>
      </div>

      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
