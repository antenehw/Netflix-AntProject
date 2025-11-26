import React from "react";
import "./Home.css";
import Banner from "../../Components/Banner/Banner";
import Row from "../../Components/Row/Row";

function Home() {
  return (
    <div className="home">
      <Banner />

      {/* Example rows */}
      <Row title="Trending Now" fetchUrl="trending" />
      <Row title="Top Rated" fetchUrl="top_rated" />
      <Row title="Action Movies" fetchUrl="action" />
      <Row title="Comedy Movies" fetchUrl="comedy" />
      <Row title="Horror Movies" fetchUrl="horror" />
    </div>
  );
}

export default Home;
