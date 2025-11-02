import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//const API_KEY = process.env.REACT_APP_API_KEY;

export default class App extends Component {
  pageSize=4;
  apiKey=process.env.REACT_APP_API_KEY;
  state={progress:0}
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
        color="#f11946"
        height={3}
        progress={this.state.progress}
        
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" apiKey={this.apiKey} pageSize={this.pageSize} country="us" category="general" />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" apiKey={this.apiKey} pageSize={this.pageSize} country="us" category="sports" />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" apiKey={this.apiKey} pageSize={this.pageSize} country="us" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" apiKey={this.apiKey} pageSize={this.pageSize} country="us" category="entertainment" />}></Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" apiKey={this.apiKey} pageSize={this.pageSize} country="us" category="general" />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" apiKey={this.apiKey} pageSize={this.pageSize} country="us" category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" apiKey={this.apiKey} pageSize={this.pageSize} country="us" category="science" />}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" apiKey={this.apiKey} pageSize={this.pageSize} country="us" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>

    )
  }
}

