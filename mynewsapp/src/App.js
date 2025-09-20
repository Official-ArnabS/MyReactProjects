import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

const  API_KEY = process.env.REACT_APP_API_KEY;

export default class App extends Component {

  render() {
  return (
      <div>
        <NavBar />
        <News apiKey={API_KEY}/>
      </div>

    )
  }
}

