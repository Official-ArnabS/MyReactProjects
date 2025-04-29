import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked");
        let newVar=text.toUpperCase();
        setText(newVar);
    }
    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here'); 
    return (
    <div>
        <div className="mb-3">
        <h1>{props.heading}</h1> 
        <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
        </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
    )
}
