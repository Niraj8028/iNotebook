import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes
  
} from "react-router-dom";

import About from './Components/About';

function App() {
  return (
    <>
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/Navbar" exact element={<Navbar/>} />
      <Route path="/About" exact element={<About/>} />
      
    </Routes>
    </div>
    </>
  );
}

export default App;
