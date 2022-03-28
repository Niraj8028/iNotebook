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
import Notestate from './Context/Notes/NoteState';

function App() {
  return (
    <>
      <Notestate>
        <div className="App">
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/Navbar" exact element={<Navbar />} />
              <Route path="/About" exact element={<About />} />

            </Routes>
          </div>
        </div>
      </Notestate>
    </>
  );
}

export default App;
