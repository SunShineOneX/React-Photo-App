import React from 'react';
import './App.css';
import Home from "./components/Home"
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom";
import { Link } from "react-router-dom"; 
import ChooseUser from "./components/ChooseUser";


function App() {
  return (
    <Router>
      <div>
        <Home />
        <Switch>
          <Route path="/ChooseUser" exact component={ChooseUser} />
          <Route path="/Home" exact component={Home} />
        </Switch>
      </div>
      </Router>
  );
}

export default App;
