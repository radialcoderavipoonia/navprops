import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BlackNav from "./components/navblack/BlackNav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import FormSumbit from "./components/formsumbit/FormSumbit";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BlackNav />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
