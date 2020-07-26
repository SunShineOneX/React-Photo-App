import React, { Component } from "react";

class UserProfile extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="profile-h1">My profile</h1>
        <img
          className="profile-pic"
          src={require("../assets/jeff2-copy.jpeg")}
        />
        <div class="row">
          <div class="col-lg-4">
            <div id="card" class="card">
                
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
