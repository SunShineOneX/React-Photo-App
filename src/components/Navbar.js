import "../Homepage.css"
import Home from "./Home";
import ChooseUser from "./ChooseUser";
import UserProfile from "./UserProfile"
import Bookmarks from "./Bookmarks"
import { BrowserRouter as Router, Switch, Route, Link } from  "react-router-dom";
import React, { Component } from 'react'




class Navbar extends Component {
  render() {
    return (
      <Router>
      <div >
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">Senna</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link"><Link to="/">Home</Link></a>
        <a class="nav-item nav-link"><Link to="/UserProfile">User Profile</Link></a>
        <a class="nav-item nav-link"><Link to="/Bookmarks">Bookmarks</Link></a>
        <a class="nav-item nav-link ml-auto" id="logout">Logout</a>
      </div>
    </div>
  </nav> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="">Senna</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Read</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Stores</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="">Search</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="">Logout</a>
            </li>
            </ul>
        </div>
      </nav>
  <     Switch>
          <Route exact path="/" component={Home} />
          <Route path="/UserProfile" component={UserProfile} />
          <Route path="/Bookmarks" component={Bookmarks} />
        </Switch>
      </div>
      </Router>
      
    )
  }
}

export default Navbar;