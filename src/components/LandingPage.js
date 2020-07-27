import React, { Component } from "react";
import "../Homepage.css";
// This component is only rendering the brand logos on the home page
class LandingPage extends Component {

  

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="container-fluid" id="senna-container">
            <img
              src={require("../assets/senna-logo-white-transparent-cropped.png")}
              className="senna-logo"
              alt=""
            />
          </div>

        
        </div>
      </div>
    );
  }
}

export default LandingPage;
