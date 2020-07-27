import React, { Component } from "react";
import "../Homepage.css";

class Home extends Component{
    constructor() {
      super();
      this.state = {
        img1Starred: false,
        img2Starred: false,
        img3Starred: false,
        img4Starred: false,
        img5Starred: false,
        img1Index: 0,
        img2Index: 0,
        img3Index: 0,
        img4Index: 0,
        img5Index: 0,
      };
    }
  
    img1Bookmarked = (event) => {
      if (this.state.img1Index === 0) {
        event.preventDefault()
        this.setState({
         img1Starred: true,
         img1Index: 1,
        })
      } else if (this.state.img1Index === 1)
        this.setState({
          img1Starred: false,
          img1Index: 0,
        })
      }
  
      img2Bookmarked = (event) => {
        if (this.state.img2Index === 0) {
          event.preventDefault()
          this.setState({
           img2Starred: true,
           img2Index: 1,
          })
        } else if (this.state.img2Index === 1)
          this.setState({
            img2Starred: false,
            img2Index: 0,
          })
        }
  
        img3Bookmarked = (event) => {
          if (this.state.img3Index === 0) {
            event.preventDefault()
            this.setState({
             img3Starred: true,
             img3Index: 1,
            })
          } else if (this.state.img3Index === 1)
            this.setState({
              img3Starred: false,
              img3Index: 0,
            })
          }
  
          img4Bookmarked = (event) => {
            if (this.state.img4Index === 0) {
              event.preventDefault()
              this.setState({
               img4Starred: true,
               img4Index: 1,
              })
            } else if (this.state.img4Index === 1)
              this.setState({
                img4Starred: false,
                img4Index: 0,
              })
            }
  
            img5Bookmarked = (event) => {
              if (this.state.img5Index === 0) {
                event.preventDefault()
                this.setState({
                 img5Starred: true,
                 img5Index: 1,
                })
              } else if (this.state.img5Index === 1)
                this.setState({
                  img5Starred: false,
                  img5Index: 0,
                })
              }
        render() {
            return (
                <div>
                    <div className="container-fluid">

          {/* First post */}

          <div class="container" id="home-photo-container">
            <div class="card" className="home-photo-card">
              <div id="username-logo">
                <img
                  className="user-post-img"
                  src={require("../assets/lakers.gif")}
                />
                <p id="account-posting">Lakers</p>
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
                  <i class="far icon fa-heart fa-2x" onClick={this.img1Bookmarked}></i>
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

          {/* Second post */}

          <div class="container" id="home-photo-container">
            <div class="card" className="home-photo-card">
              <div id="username-logo">
                <img
                  className="user-post-img"
                  src={require("../assets/rockets.gif")}
                />
                <p id="account-posting">Rockets</p>
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
                  <i class="far icon fa-heart fa-2x"  onClick={this.img2Bookmarked}></i>
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
                <p id="time-since-posted">posted 2 minutes ago</p>
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
                  className="user-post-img"
                  id="naturebacks-logo"
                  src={require("../assets/natureback.png")}
                />
                <p id="account-posting">Naturebacks</p>
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
                  <i class="far icon fa-heart fa-2x"  onClick={this.img3Bookmarked}></i>
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
                <p id="account-posting">Naturebacks</p>
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
                  <i class="far icon fa-heart fa-2x"  onClick={this.img4Bookmarked}></i>
                </div>
                <p>
                  <strong>naturebacks @supercampergeorgia</strong>
                </p>
                <p className="bold-home-p">
                  Glad to see you two enjoying the sunrise. Check your dm's for
                  a free shirt on us :)
                </p>
                <p className="home-photo-comment" id="home-photo-comment">
                  View all 48 comments
                </p>
                <div id="likes-container">
                  <p>
                    <strong>steveopartyguy98</strong>
                  </p>
                  <p>damn what a view!!</p>
                </div>
                <p id="time-since-posted">posted 5 minutes ago</p>
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
                  src={require("../assets/celtics.gif")}
                />
                <p id="account-posting">Celtics</p>
              </div>
              <img
                className="img-fluid"
                id="home-photo"
                src={require("../assets/kemba.webp")}
              />
              <div class="card-body">
                <div id="likes-container">
                  <p>
                    <strong>3,632 likes</strong>
                  </p>
                  <i class="far icon fa-heart fa-2x"  onClick={this.img5Bookmarked}></i>
                </div>
                <p>
                  <strong>celtics @kembawalker</strong>
                </p>
                <p className="bold-home-p">
                  Kemba Walker after sinking the shot with seconds left in the
                  4th to tie the game
                </p>
                <p className="home-photo-comment" id="home-photo-comment">
                  View all 141 comments
                </p>
                <div id="likes-container">
                  <p>
                    <strong>kingofthetown84</strong>
                  </p>
                  <p>thank god for kemba</p>
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
      </div>
    );
  }
}

export default Home;