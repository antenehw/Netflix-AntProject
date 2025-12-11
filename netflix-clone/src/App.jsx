import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TVShows from "./pages/TVshows/TVshows";
import Movies from "./pages/Movies/Movies";
import Popular from "./pages/Popular/Popular";
import MyList from "./pages/Mylist/Mylist";
import Header from "./Components/Header/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv" element={<TVShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/mylist" element={<MyList />} />
      </Routes>
    </Router>
  );
}

export default App;
