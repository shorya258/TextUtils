import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
function App() {
  const [mode, setMode]= useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#222425';
      document.body.style.color='white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }
  return (
    <div className="App">
      <Navbar title="textUtils2" aboutText="about text" mode={mode} toggleMode={toggleMode}></Navbar>
      <div className="container my-3">
        <TextForm heading="Enter a text to analyze" mode={mode}></TextForm>
      </div>
      {/* <Card></Card> */}
    </div>
  );
}

export default App;
