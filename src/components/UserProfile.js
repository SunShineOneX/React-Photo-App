import React, { Component } from 'react'

 class UserProfile extends Component {
    render() {
        return (
            <div className="container-fluid">
                <img className="profile-pic" src={require("../assets/jeff2-copy.jpeg")} />
            </div>
        )
    }
}

export default UserProfile;