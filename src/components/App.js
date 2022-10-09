import React from 'react'
import '../styles/App.css';
import { useState, useEffect } from 'react';

const BASE_URL = "https://content.newtonschool.co/v1/pr/main/users";

const App = () => {
  const [userId, setUserId] = useState("1");
  const [name, setName] = useState("");

  useEffect(() => {
    if (userId) fetch(`${BASE_URL}/${userId}`).then((res) => res.json()).then(user => setName(user.name))
  }, [userId]);

  const changeInput = (e) => {
    setUserId(e.target.value);
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
