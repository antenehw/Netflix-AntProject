import React, { useEffect, useState } from "react";
import axios from "axios";
import TVshows from "./TVshows.css";

function TvShows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=YOUR_TMDB_API_KEY`
      );
      setShows(response.data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="tv-container">
      <h1 className="tv-title">TV Shows</h1>

      <div className="tv-grid">
        {shows.map((show) => (
          <div key={show.id} className="tv-card">
            <img
              src={`https://image.tmdb.org/t/p/w300${show.poster_path}`}
              alt={show.name}
            />
            <p>{show.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TvShows;
