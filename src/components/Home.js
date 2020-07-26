import React from "react";
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

function Home() {
  return (
    <div className="container-fluid">
      <div className="container-fluid" id="senna-container">
        <img
          src={require("../assets/senna-logo-white-transparent-cropped.png")}
          className="senna-logo"
          alt=""
        />
      </div>
      <div class="card-deck">
        <div class="row">
          <div class="col-lg-4">
            <div id="card" class="card">
              <img
                class="card-img-top img-fluid"
                src={require("../assets/life-hunter.jpg")}
              />
            </div>
          </div>
          <div class="col-lg-4">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
