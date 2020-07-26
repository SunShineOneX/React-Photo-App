import "../Homepage.css"
import Home from "./Home";
import UserProfile from "./UserProfile"
import Bookmarks from "./Bookmarks";
import Photogrid from "./Photogrid";
import { BrowserRouter as Router, Switch, Route, Link } from  "react-router-dom";
import React, { Component } from 'react';

let switchLogin = document.getElementById("log-out");
let logout = "login"


class Navbar extends Component {

  constructor(props) {
    super(props);
      this.state = {
        userLoggedIn: true,
      }
    
  }

  onUserLogin = (event) => {
    switchLogin.innerHTML= logout;
    event.preventDefault()
    this.setState= ({
      userLoggedIn: false 
      
    })
    if (this.state.userLoggedIn === false) {
      switchLogin.innerHTML="Login";
    }
    
  }

//   function nextSongCounter() {
//     trackIndex++;
//     console.log(trackIndex);
//     console.log(stations[stationsIndex].songs.length);
//     if (trackIndex > stations[stationsIndex].songs.length - 1) {
//         trackIndex = 0;
//     }
// };


  
  render() {
    return (
      <Router>
      <div >
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="">Senna</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link"><Link to="/">Home</Link></a>
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
              <a class="nav-link" id="log-out"href="" value={this.state.userLoggedIn} onChange={this.onUserLogin}>Logout</a>
            </li>
            </ul>
        </div>
      </nav>
        <Switch>
          <Route exact path="/" component={Home} />
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