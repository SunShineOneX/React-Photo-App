import React , { Component } from 'react';
import Home from "./components/Home"
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from  "react-router-dom";
import Navbar from "./components/Navbar"
import UserSteph from './components/UserSteph';
import UserJeff from "./components/UserJeff";
import Photogrid from "./components/Photogrid";


function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}


export default App;
