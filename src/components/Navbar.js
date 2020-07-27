import "../Homepage.css"
import Home from "./Home";
import UserProfile from "./UserProfile";
import LandingPage from "./LandingPage";
import Bookmarks from "./Bookmarks";
import Photogrid from "./Photogrid";
import { BrowserRouter as Router, Switch, Route, Link } from  "react-router-dom";
import React, { Component } from 'react';

let switchLogin = document.getElementsByClassName("button");
let log1 = "Logout";
let log2 = "Login";


class Navbar extends Component {

  // Utilizing state to keep track of when the user is logged in or out here
  constructor() {
    super();
      this.state = {
        userLoggedIn: true,
        logoutIndex: 0,
      }
    
  }

  // switchUserLogin = (event) => {
  //   // switchLogin.innerHTML= "Login";
  //   event.preventDefault()
  //   this.setState= ({
  //     userLoggedIn: false 
  //   })
  //   // if (this.state.userLoggedIn === false) {
  //   //   switchLogin.innerHTML={logout};
  //   // }
    
  // }
// A function that updates onclick whether the user is logged in or out
switchUserLogin = (event) => {
  if (this.state.logoutIndex === 0) {
    event.preventDefault()
    this.setState({
     userLoggedIn: false,
     logoutIndex: 1
    })
    switchLogin.innerHTML = {log1};
  } else if (this.state.logoutIndex === 1)
    this.setState({
      userLoggedIn: true,
      logoutIndex: 0,
    })
    switchLogin.textContent = {log2};
  }

  

// Below is the entire navbar with the BrowserRouter as Routers, Switch, and links and routes.
// This allows for a multipage aesthetic.
  
  render() {
    return (
      <Router>
      <div >
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Senna</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link"><Link to="/Home">Home</Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><Link to="/UserProfile">User Profile</Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><Link to="/Bookmarks">Bookmarks</Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><Link to="/Photogrid">Photos</Link></a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
            <img
                  className="senna-navbar-user-photo"
                  src={require("../assets/jeff2-copy.jpeg")}
                />
              <button className="button" id="log-out" onClick={this.switchUserLogin}>Logout</button>
              {/* <button id="log-out" value={this.state.userLoggedIn} onClick={this.switchUserLogin}>Logout</button> */}
              {/* <a class="nav-link" id="log-out"href="" value={this.state.userLoggedIn} onClick={this.onUserLogin}>Logout</a> */}
            </li>
            </ul>
        </div>
      </nav>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/Home" component={Home} />
          <Route path="/UserProfile" component={UserProfile} />
          <Route path="/Bookmarks" component={Bookmarks} />
          <Route path="/Photogrid" component={Photogrid} />
        </Switch>
      </div>
      </Router>
      
    )
  }
}

export default Navbar;