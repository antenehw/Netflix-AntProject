
import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Row from './Components/Row/Row';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    <Footer/>
    <Banner/>
    <Row/>
    
    
    </div>
  );
}

export default App;
