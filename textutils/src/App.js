import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div>
    <Navbar title='TextUtils' aboutText='About' />
    <div className="container my-3"> 
    <TextForm heading='Enter your text to analyze below'/>
    {/*<About/>*/}  
    </div>
    </div>
   
  
  );
}

export default App;
