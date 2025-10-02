import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="general" apiKey={API_KEY} pageSize={4} country="us" category="general" />}></Route>
            <Route exact path="/sports" element={<News key="sports" apiKey={API_KEY} pageSize={4} country="us" category="sports" />}></Route>
            <Route exact path="/business" element={<News key="business" apiKey={API_KEY} pageSize={4} country="us" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" apiKey={API_KEY} pageSize={4} country="us" category="entertainment" />}></Route>
            <Route exact path="/general" element={<News key="general" apiKey={API_KEY} pageSize={4} country="us" category="general" />}></Route>
            <Route exact path="/health" element={<News key="health" apiKey={API_KEY} pageSize={4} country="us" category="health" />}></Route>
            <Route exact path="/science" element={<News key="science" apiKey={API_KEY} pageSize={4} country="us" category="science" />}></Route>
            <Route exact path="/technology" element={<News key="technology" apiKey={API_KEY} pageSize={4} country="us" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>

    )
  }
}

