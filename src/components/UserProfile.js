import React, { Component } from "react";

class UserProfile extends Component {
  render() {
    return (
      <div className="container-fluid">
          <div className="container">
        <h1 className="profile-h1">My profile</h1>
        </div>
        <img
          className="profile-pic"
          src={require("../assets/jeff2-copy.jpeg")}
        />
        {/* <div class="row">
          <div class="col">
            <div id="card" class="card">
                <img class="card-images" src={require("../assets/city.jpg")} alt=""/>
            </div>
          </div>
          <div class="col">
            <div id="card" class="card">
                <img class="card-images" src={require("../assets/laptop.jpeg")} alt=""/>
            </div>
          </div>
          <div class="col">
            <div id="card" class="card">
                <img class="card-images" src={require("../assets/coffee.jpg")} alt=""/>
            </div>
          </div>
           */}

<div class="row">
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <p>BIOLOGY+BEYOND</p>
                            <img class="card-images" src={require("../assets/coffee.jpg")}className="card-img-top frag" alt=""></img>
                            <p class="sub-title">Making Sense of the Genome at Last</p>
                            <p class="author">by Adam Piere</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <p>Women's Science & Engineering</p>
                            <img class="card-images" src={require("../assets/city.jpg")}className="card-img-top frag" alt=""></img>
                            <p class="sub-title">Your Brain Is On the Brink of Chaos</p>
                            <p class="author">by Kelly Clancy</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <p><strong>QUANTA</strong> ABSTRACTIONS</p>
                            <img class="card-images" src={require("../assets/laptop.jpeg")}className="card-img-top frag" alt=""></img>
                            <p class="sub-title">Mathematicians Calculate How Randomness Creeps In</p>
                            <p class="author">by Marcus Woo</p>
                        </div>
                    </div>
                
        </div>
      </div>
    );
  }
}

export default UserProfile;
