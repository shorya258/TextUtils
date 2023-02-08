import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleUpClick=()=>{
        setText(text.toUpperCase());
    }
    const handleLoClick=()=>{
        setText(text.toLowerCase());
    }
    const handleClearClick=()=>{
        setText("");
    }
    const handleCopyText=()=>{
        var txt= document.getElementById("myBox");
        txt.select();
        navigator.clipboard.writeText(txt.value);
    }
    const[text, setText]= useState('');
  return (
    <div>
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
              <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#222425':'white' ,color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>     
          <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
          <button className="btn btn-primary" onClick={handleClearClick}>Clear text area</button>
          <button className="btn btn-primary mx-3" onClick={handleCopyText}>Copy text area</button>
        </div>
        <div className="container">
            <h2>Your text summary:</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>the following text can be read in {0.008*(text.split(" ").length)} minutes</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter a text to see it's preview here!"}</p>
        </div>
    </div>
  )
}
