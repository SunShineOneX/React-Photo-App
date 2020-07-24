import React from 'react';
import "../Homepage.css"
import { BrowserRouter as Router, Redirect, Switch, Route } from  "react-router-dom";
import { Link } from "react-router-dom"; 
import ChooseUser from "./ChooseUser";
import UserJeff from "./UserJeff";
import UserSteph from "./UserSteph";

function Home() {
  return (
        <Router>
            <div>
                <div className="container-fluid" id="senna-container">
                    <img src={require("../assets/senna-logo-white-transparent.png")}className="senna-logo" alt="" />
                </div>
                <div className="container">
                    
                    <Route path="/ChooseUser" component={ChooseUser} />
                    {/* <h1 className="get-started-link"><Link to="/ChooseUser">Get Started</Link></h1> */}
                    <Switch>
                    <Route path="/ChooseUsers">
                    <ChooseUser />
                    </Route>
                    </Switch>
                   
                    </div>
                
            </div>
        </Router>
  );
}

export default Home;
