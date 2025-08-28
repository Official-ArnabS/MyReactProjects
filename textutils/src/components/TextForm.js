import React, {useState} from 'react'

export default function TextForm(props) {

    //Function to turn a text area input into upper case
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked");
        let newVar=text.toUpperCase();
        setText(newVar);
    }

    //Function to turn a text area input into lower case
    const handleLoClick = ()=>{
        //console.log("Uppercase was clicked");
        let newVar=text.toLowerCase();
        setText(newVar);
    }

    //Function to find maximum characters in a text area and its count
    const handleGetMaxCharacterClick = ()=>{
        //console.log("GetMaxCharacter was clicked");
        let oldText=text;
        let trimmedText=text.trim();
        let charFrequency = {};
            for (let char of trimmedText) {
                if (charFrequency[char]) {
                    charFrequency[char]++;
                } else {
                    charFrequency[char] = 1;
                }
            }
            let maxFreq = 0;
            let maxFreqChar = '';
            for (let char in charFrequency) {
                if (charFrequency[char] > maxFreq) {
                    maxFreq = charFrequency[char];
                    maxFreqChar = char;
                }
            }
        setText(oldText+"\n"+"Maximum occurence found for character: '"+maxFreqChar+"' with count: "+maxFreq);    
    }
    
    //Function to set changes made in the text area to state value
    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);
    }

    //Function to set changes made in the text area to state value
    const handleClearClick = (event)=>{
        //console.log("Clear click");
        setText('');
    }

    //Function to remove extra spaces
    const handleExtraSpaces = (event)=>{
        //console.log("Clear click");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    //Base definition of TextForm function
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
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleGetMaxCharacterClick}>Get character with maximum occurence</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
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
