import "../index.css"
import Home from "./Home";
import ChooseUser from "./ChooseUser";
import Bookmarks from "./Bookmarks"
import { BrowserRouter as Router, Switch, Route, Link } from  "react-router-dom";
import React, { Component } from 'react'




class Navbar extends Component {
  render() {
    return (
      <Router>
      <div >
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">Senna</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link"><Link to="/ChooseUser">Choose User</Link></a>
        <a class="nav-item nav-link"><Link to="/">Home</Link></a>
        <a class="nav-item nav-link">User Profile</a>
        <a class="nav-item nav-link"><Link to="/Bookmarks">Bookmarks</Link></a>
      </div>
    </div>
  </nav>
  <     Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ChooseUser" component={ChooseUser} />
          <Route path="/Bookmarks" component={Bookmarks} />
        </Switch>
      </div>
      </Router>
      
    )
  }
}

export default Navbar;