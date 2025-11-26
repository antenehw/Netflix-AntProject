import React, { useEffect, useState } from "react";
import axios from "axios";
import { requests } from "../Tmdb/tmdb";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const baseURL = "https://api.themoviedb.org/3";

      const request = await axios.get(baseURL + requests.fetchNetflixOriginals);

      // pick a random movie
      const randomMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ];

      setMovie(randomMovie);
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
