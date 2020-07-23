import React from 'react';
import "../Homepage.css"
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom";
import { Link } from "react-router-dom"; 
import ChooseUser from "./ChooseUser";
import UserJeff from "./UserJeff";
import UserSteph from "./UserSteph";

function Home() {
  return (
        <Router>
            <div>
                <Switch>
                <Route path="/ChooseUser" exact component={ChooseUser} />
                <Route path="/Home" exact component={Home} />
                </Switch>
                <div className="container-fluid" id="senna-container">
                    <img src={require("../assets/senna-logo-white-transparent.png")}className="senna-logo" alt="" />
            </div>
                <div className="container">
                    <Link to="/ChooseUser">
                <h1 className="get-started-link">Get Started</h1>
                    </Link> 
                    
                </div>
            </div>
        </Router>
  );
}

export default Home;
