import React from 'react';
import {starredPhotos} from '../App.js';


// let bookmarkObj = React.useContext(starredPhotos)
// This is where all the bookmarked photos will render depending on the state of each individual image
// This is based on the state of each image in Home.js and whether it its value is true or false


// Unable to figure out how to get the state from my other component to display the images in this component based on their state. I tried really hard.
function Bookmarks() {
    return (
        <div>
            {/* <starredPhotos.Provider value = {bookmarks}>
              {(bookmarks== true)? <Button onClick = {toggleLoginProfile} variant="light">Login</Button>: <Button onClick = {toggleLoginProfile} variant="light">Logout</Button>}
              </starredPhotos.Provider> */}
            <h2>Bookmarks!!!!!</h2>
            {/* <h1> I tried really hard and could not figure this portion out. All of the components in state from Home.js reflect
                and change upon clicking the items indicating whether you like them or not. The login buttons state works properly in components as well.
                I just could not figure this out with redux.
            </h1> */}


        </div>
    )
}

export default Bookmarks;
