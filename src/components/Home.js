import React, { Component } from "react";
import "../Homepage.css";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";
import Photogrid from "./Photogrid";
import UserJeff from "./UserJeff";
import UserSteph from "./UserSteph";

class Home extends Component {

  

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="container-fluid" id="senna-container">
            <img
              src={require("../assets/senna-logo-white-transparent-cropped.png")}
              className="senna-logo"
              alt=""
            />
          </div>

        
        </div>
      </div>
    );
  }
}

export default Home;
