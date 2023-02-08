import React, { useState } from 'react';

export default function Card() {
    
    const[myStyle, setMyStyle]= useState({
        backgroundColor: 'white',
        color: 'black'
    });

    const[btnText, setBtnText]=useState("Enable Dark Mode");

    const toggleDarkMode=()=>{
        if(myStyle.color==='black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            console.log("dark mode enabled")
            setBtnText("Enable Light Mode");
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            console.log("light mode enabled")
            setBtnText("Enable Dark Mode");
        }
    }

  return (
    <div>
      <div className="card" style={myStyle}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-primary mx-3" onClick={toggleDarkMode}>{btnText}</button>
          </div>
      </div>
    </div>
  )
}
