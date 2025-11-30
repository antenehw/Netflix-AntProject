import React, { useState, useEffect } from "react";
import axios from "../../../utilis/axios";
import "./Row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error("error fetching movies", error);
      }
    }

    if (fetchUrl) fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.title ||
          movie?.name ||
          movie?.original_name,
        {
          year: movie?.release_date?.split("-")[0],
        }
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          const videoId = urlParams.get("v");
          setTrailerUrl(videoId);
        })
        .catch((err) => console.error("Trailer not found", err));
    }
  };

  const opts = {
    height: "100",
    width: "50%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies?.map((movie, index) => (
        <img
  onClick={() => handleClick(movie)}
  key={movie.id || index}
  src={
    movie.poster_path
      ? `${base_url}${movie.poster_path}`
      : ""
  }
  alt={movie.title || movie.name || movie.original_name}
  className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
/>

        ))}
      </div>

      <div className="row_trailer">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
