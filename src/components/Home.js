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
      <div class="card" className="home-photo-card">
  <img className="img-fluid" id="home-photo" src={require("../assets/deer-cute.jpg")} />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>








      {/* <div class="card-deck">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div id="card" class="card">
              <img
                class="card-img-top img-fluid"
                src={require("../assets/life-hunter.jpg")}
              />
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div id="card" class="card">
              <img
                class="card-img-top img-fluid"
                src={require("../assets/red-console.jpg")}
              />
            </div>
          </div>
          <div class="col-lg-4 col-md-6 ">
            <div id="card" class="card">
              <img
                class="card-img-top img-fluid"
                src={require("../assets/pretty-kitty.jpg")}
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
    </div>
  );
}

export default Home;
