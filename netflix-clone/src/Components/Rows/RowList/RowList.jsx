import React from 'react';
import Row from '../Row/Row';
import {requests} from '../../../utilis/requests';

const RowList = () => {
return (
    <div className = "row-list">
    <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true} />

    <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
</div>
);
};

export default RowList;



