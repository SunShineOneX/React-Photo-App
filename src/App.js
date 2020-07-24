import React from 'react';
import Home from "./components/Home"
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom";
import { Link } from "react-router-dom"; 
import ChooseUser from "./components/ChooseUser";


function App() {
  return (
      <div>
        <Home />
      </div>
     
  );
}

export default App;
