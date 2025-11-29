// src/pages/Home/Home.js
import React from "react";
import Row from "../../Components/Row/Row";
import { requests } from "../../api/tmdb";

function Home() {
  return (
    <div>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Upcoming Movies" fetchUrl={requests.fetchUpcoming} />
      <Row title="Popular Movies" fetchUrl={requests.fetchPopular} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default Home;
