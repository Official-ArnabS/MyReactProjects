import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//const API_KEY = process.env.REACT_APP_API_KEY;

const App =()=> {
  const pageSize=4;
  const apiKey=process.env.REACT_APP_API_KEY;
  const state={progress:0};
  const [progress, setProgress] = useState(0);

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
        color="#f11946"
        height={3}
        progress={progress}
        
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key="general" apiKey={apiKey} pageSize={pageSize} country="us" category="general" />}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" apiKey={apiKey} pageSize={pageSize} country="us" category="sports" />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" apiKey={apiKey} pageSize={pageSize} country="us" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" apiKey={apiKey} pageSize={pageSize} country="us" category="entertainment" />}></Route>
            <Route exact path="/general" element={<News setProgress={setProgress} key="general" apiKey={apiKey} pageSize={pageSize} country="us" category="general" />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" apiKey={apiKey} pageSize={pageSize} country="us" category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" apiKey={apiKey} pageSize={pageSize} country="us" category="science" />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" apiKey={apiKey} pageSize={pageSize} country="us" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>

    )
  
}

export default App;

