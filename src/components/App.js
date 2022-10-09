import React from 'react'
import '../styles/App.css';
import { useState, useEffect } from 'react';
const App = () => {
 const[inputValue, setInputValue]=useState("");
 const changeInput = (e) =>{
  setInputValue(e.target.value);
 }
 const buttonClick=()=>{
  setText((prev)=>prev + inputValue);
  setInputValue("");
 }

 



  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} />
      <p id="name">{name}</p>
    </div>
  );
}


export default App;
