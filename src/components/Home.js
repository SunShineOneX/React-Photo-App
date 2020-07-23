import React from 'react';
import "../Homepage.css"
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom";
import UserJeff from "./UserJeff";
import UserSteph from "./UserSteph";

function Home() {
  return (
        <div class="senna-container">
            <img src={require("../assets/senna-logo-white-transparent.png")}className="senna-logo" alt="" />
        </div>
  );
}

export default Home;
