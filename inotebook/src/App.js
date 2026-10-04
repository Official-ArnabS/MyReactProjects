import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home1 from './components/Home1';
import About from './components/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home1 />}>
          </Route>

          <Route exact path="/about" element={<About />}>
          </Route>

        </Routes>
      </Router>

    </>
  );
}
export default App;
