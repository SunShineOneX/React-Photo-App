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
      <div class="container" id="home-photo-container">
      <div class="card" className="home-photo-card">
        <p>Lakers</p>
  <img className="img-fluid" id="home-photo" src={require("../assets/deer-cute.jpg")} />
  <div class="card-body">
    <p>27,316 likes</p>
    <p className="bold-home-p">pretty deer!</p>
    <p className="home-photo-comment">View all 219 comments</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <input type="text" className="input-comment" />
  </div>
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
