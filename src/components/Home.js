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
        <div id="username-logo">
      <img className="user-post-img" src={require("../assets/lakers.gif")} />
        <p>Lakers</p>
        </div>
  <img className="img-fluid" id="home-photo" src={require("../assets/lakers2.jpg")} />
  <div class="card-body">
    <div id ="likes-container">
    <p><strong>27,316 likes</strong></p><i class="far icon fa-heart fa-2x"></i>
    </div>
    <p><strong>lalakers @lebronjames</strong></p>
    <p className="bold-home-p">Lebron and Anthony Davis before the game winning play</p>
    <p className="home-photo-comment" id="home-photo-comment">View all 219 comments</p>
    <div id ="likes-container">
    <p><strong>angel_lakersfan96</strong></p><p>lebron the goat</p>
    </div>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="break the ice" aria-label="Recipient's username" />
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">Post</button>
  </div>
</div>
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
