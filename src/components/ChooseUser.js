import React from 'react';
import "../App.css"
import Home from "./Home";
import Navbar from "./Navbar";
import UserJeff from "./UserJeff";
import UserSteph from "./UserSteph";
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom";

function ChooseUser() {
  return (
    <Router>
        <div ><h1>Hello ChooseUser!</h1>
        <Route path="/UserJeff" component={UserJeff} />
        <Route path="/UserSteph" component={UserSteph} />
        </div>
    </Router>
  );
}

export default ChooseUser;
