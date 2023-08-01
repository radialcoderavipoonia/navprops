import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import BlackNav from './components/BlackNav';
import RedNav from './components/RedNav';
import GreenNav from './components/GreenNav';
import Physique from './components/Physique';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <BlackNav />
      <Home />
      <About/>
    </>
  );
}

export default App;
