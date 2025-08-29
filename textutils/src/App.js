import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }

  }
  return (
    <div>
    <Navbar title='TextUtils' aboutText='About' mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3"> 
    <TextForm heading='Enter your text to analyze below' mode={mode}/>
    {/*<About/>*/}  
    </div>
    </div>
   
  
  );
}

export default App;
