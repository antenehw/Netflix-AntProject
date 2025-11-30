// src/pages/Home/Home.js
import React from "react";
import Row from "../../Components/Rows/Row/Row";
import { requests } from "../../utilis/requests";
import axios from "axios";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import RowList from "../../Components/Rows/RowList/RowList";


function Home() {
  return (
    <>

    <Header/>
    <Banner/>
    <RowList/>
    <Footer/>

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Upcoming Movies" fetchUrl={requests.fetchUpcoming} />
      <Row title="Popular Movies" fetchUrl={requests.fetchPopular} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    </>

  );
}

export default Home;
