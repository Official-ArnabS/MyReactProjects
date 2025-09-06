import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title = "Textutils - Light Mode";
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = "Textutils - Dark Mode";
    }

  }

  return (
    <div>
    <Router>
    <Navbar title='TextUtils' aboutText='About' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      <div>
        <Routes>
          <Route exact path="/about" element={<div className="container my-3"><About mode={mode}/></div>}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter your text to analyze below' mode={mode}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
    </div>
   
  
  );
}

export default App;
