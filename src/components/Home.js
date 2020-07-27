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
       
       {/* First post */}

      <div class="container" id="home-photo-container">
        <div class="card" className="home-photo-card">
          <div id="username-logo">
            <img
              className="user-post-img"
              src={require("../assets/lakers.gif")}
            />
            <p>Lakers</p>
          </div>
          <img
            className="img-fluid"
            id="home-photo"
            src={require("../assets/lakers2.jpg")}
          />
          <div class="card-body">
            <div id="likes-container">
              <p>
                <strong>27,316 likes</strong>
              </p>
              <i class="far icon fa-heart fa-2x"></i>
            </div>
            <p>
              <strong>lalakers @lebronjames</strong>
            </p>
            <p className="bold-home-p">
              Lebron and Anthony Davis before the game winning play
            </p>
            <p className="home-photo-comment" id="home-photo-comment">
              View all 219 comments
            </p>
            <div id="likes-container">
              <p>
                <strong>angel_lakersfan96</strong>
              </p>
              <p>lebron the goat</p>
            </div>
            <p id="time-since-posted">posted 6 minutes ago</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="break the ice"
                aria-label="user comment"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second post */}

      <div class="container" id="home-photo-container">
        <div class="card" className="home-photo-card">
          <div id="username-logo">
            <img
              className="user-post-img"
              src={require("../assets/rockets.gif")}
            />
            <p>Rockets</p>
          </div>
          <img
            className="img-fluid"
            id="home-photo"
            src={require("../assets/russell-westbrook-rockets-1.jpg")}
          />
          <div class="card-body">
            <div id="likes-container">
              <p>
                <strong>9,651 likes</strong>
              </p>
              <i class="far icon fa-heart fa-2x"></i>
            </div>
            <p>
              <strong>rockets @russellwestbrook</strong>
            </p>
            <p className="bold-home-p">
              Russel after sinking the 3 to tie the game in OT.
            </p>
            <p className="home-photo-comment" id="home-photo-comment">
              View all 119 comments
            </p>
            <div id="likes-container">
              <p>
                <strong>okckd35</strong>
              </p>
              <p>still missing the okc dream teams. feelsbadman.</p>
            </div>
            <p id="time-since-posted">posted 30 seconds ago</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="break the ice"
                aria-label="user comment"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third post */}

      <div class="container" id="home-photo-container">
        <div class="card" className="home-photo-card">
          <div id="username-logo">
            <img
              className="user-post-img" id="naturebacks-logo"
              src={require("../assets/natureback.png")}
            />
            <p>Naturebacks</p>
          </div>
          <img
            className="img-fluid"
            id="home-photo"
            src={require("../assets/naturebacks-img1.jpg")}
          />
          <div class="card-body">
            <div id="likes-container">
              <p>
                <strong>1471 likes</strong>
              </p>
              <i class="far icon fa-heart fa-2x"></i>
            </div>
            <p>
              <strong>naturebacks @xoxovalleygirl</strong>
            </p>
            <p className="bold-home-p">
               One of our biggest fans chillin on 4th of july weekend
            </p>
            <p className="home-photo-comment" id="home-photo-comment">
              View all 219 comments
            </p>
            <div id="likes-container">
              <p>
                <strong>pykefrombelow</strong>
              </p>
              <p>i love this new shirt!</p>
            </div>
            <p id="time-since-posted">posted 3 minutes ago</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="break the ice"
                aria-label="user comment"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth post */}

      <div class="container" id="home-photo-container">
        <div class="card" className="home-photo-card">
          <div id="username-logo">
            <img
              className="user-post-img"
              src={require("../assets/natureback.png")}
            />
            <p>Naturebacks</p>
          </div>
          <img
            className="img-fluid"
            id="home-photo"
            src={require("../assets/naturebacks-img2.jpg")}
          />
          <div class="card-body">
            <div id="likes-container">
              <p>
                <strong>742 likes</strong>
              </p>
              <i class="far icon fa-heart fa-2x"></i>
            </div>
            <p>
              <strong>naturebacks @supercampergeorgia</strong>
            </p>
            <p className="bold-home-p">
              Loving the scenery with our newest shirt!
            </p>
            <p className="home-photo-comment" id="home-photo-comment">
              View all 219 comments
            </p>
            <div id="likes-container">
              <p>
                <strong>angel_lakersfan96</strong>
              </p>
              <p>lebron the goat</p>
            </div>
            <p id="time-since-posted">posted 6 minutes ago</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="break the ice"
                aria-label="user comment"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fifth post */}

      <div class="container" id="home-photo-container">
        <div class="card" className="home-photo-card">
          <div id="username-logo">
            <img
              className="user-post-img"
              src={require("../assets/lakers.gif")}
            />
            <p>Lakers</p>
          </div>
          <img
            className="img-fluid"
            id="home-photo"
            src={require("../assets/lakers2.jpg")}
          />
          <div class="card-body">
            <div id="likes-container">
              <p>
                <strong>27,316 likes</strong>
              </p>
              <i class="far icon fa-heart fa-2x"></i>
            </div>
            <p>
              <strong>lalakers @lebronjames</strong>
            </p>
            <p className="bold-home-p">
              Lebron and Anthony Davis before the game winning play
            </p>
            <p className="home-photo-comment" id="home-photo-comment">
              View all 219 comments
            </p>
            <div id="likes-container">
              <p>
                <strong>angel_lakersfan96</strong>
              </p>
              <p>lebron the goat</p>
            </div>
            <p id="time-since-posted">posted 6 minutes ago</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="break the ice"
                aria-label="user comment"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
