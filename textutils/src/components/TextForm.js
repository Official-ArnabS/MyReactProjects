import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked");
        let newVar=text.toUpperCase();
        setText(newVar);
    }

    const handleLoClick = ()=>{
        //console.log("Uppercase was clicked");
        let newVar=text.toLowerCase();
        setText(newVar);
    }
    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState(''); 
    return (
    <>
    <div className="container">
        <div className="mb-3">
            <h1>{props.heading}</h1> 
            <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary here</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length * 0.08} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    
    )
}
