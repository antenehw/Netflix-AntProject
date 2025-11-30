import React, { useState, useEffect } from "react";
import axios from "../../utilis/axios"
import "./Row.css";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // optional loading state

  useEffect(() => {
    const fetchData = async () => {
      try {


// console.log(fetchUrl);
//         let request = await axios.get(fetchUrl);
//         console.log(request);
//         setMovie(request.data.results);
//       }catch(error) {
//         console.log(error);
//       }
//     })()
//   }, [fetchUrl]);


        const baseURL = "https://api.themoviedb.org/3";
        const res = await fetch(baseURL + fetchUrl);
        const data = await res.json();

        // Check if results exist and is an array
        if (data && Array.isArray(data.results)) {
          setMovies(data.results);
        } else {
          console.warn("TMDB response missing results array", data);
          setMovies([]); // fallback to empty array
        }
      } catch (err) {
        console.error("Failed to fetch movies:", err);
        setMovies([]); // fallback to empty array
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchUrl]);

  if (loading) return <p>Loading movies...</p>;

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row-poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
