import React, { useEffect, useContext, useState } from "react";
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {
  const [apiPayload, setPayload] = useState('No Response Yet')

  useEffect(() => {
    async function getPayload() {
      const response = await axios.get(`http://127.0.0.1:9999/`)
      setPayload(`server payload: ${response.data.msg}`)
    }

    getPayload()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {apiPayload}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
