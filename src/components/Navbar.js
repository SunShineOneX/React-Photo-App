import React from 'react';
import "../App.css"
import Home from "./Home";
import ChooseUser from "./ChooseUser";
import { BrowserRouter as Router, Switch, Route, Link } from  "react-router-dom";

function Navbar() {
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
      <a class="nav-item nav-link active"><Link to="/ChooseUser">Choose User</Link></a>
      <a class="nav-item nav-link"><Link to="/">Home</Link></a>
      <a class="nav-item nav-link">User Profile</a>
      <a class="nav-item nav-link disabled">Bookmarks</a>
    </div>
  </div>
</nav>
<     Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ChooseUser" component={ChooseUser} />
      </Switch>
    </div>
    </Router>
  );
}

export default Navbar;
