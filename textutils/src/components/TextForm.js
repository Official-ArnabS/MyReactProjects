import React, {useState} from 'react'

export default function TextForm(props) {

    //Function to turn a text area input into upper case
    const handleUpClick = () => {
        //console.log("Uppercase was clicked");
        let newVar = text.toUpperCase();
        setText(newVar);
        props.showAlert("Text converted to uppercase successfully", "success");
    }

    //Function to turn a text area input into lower case
    const handleLoClick = () => {
        //console.log("Uppercase was clicked");
        let newVar = text.toLowerCase();
        setText(newVar);
        props.showAlert("Text converted to lowercase successfully", "success");
    }

    //Function to find maximum characters in a text area and its count
    const handleGetMaxCharacterClick = () => {
        //console.log("GetMaxCharacter was clicked");
        let oldText = text;
        let trimmedText = text.trim();
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
        setText(oldText + "Maximum occurence found for character: '" + maxFreqChar + "' with count: " + maxFreq);
    }

    //Function to set changes made in the text area to state value
    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }

    //Function to set changes made in the text area to state value
    const handleClearClick = (event) => {
        //console.log("Clear click");
        setText('');
        props.showAlert("Text cleared successfully", "success");
    }

    //Function to remove extra spaces
    const handleExtraSpaces = (event) => {
        //console.log("Clear click");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed successfully", "success");
    }

    //Base definition of TextForm function
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
                        id="MyBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleGetMaxCharacterClick}>Get character with maximum occurence</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
            <div className="container my-3" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary here</h2>
                <p>{(text.split(/\s+/).filter((element)=>{return element.length!==0})).length} words and {text.length} characters</p>
                <p>{text.length > 0 ? text.split(" ").length * 0.08 : 0} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "No preview available!"}</p>
            </div>
        </>

    )
}
