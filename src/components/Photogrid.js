import React from 'react'
import "../Homepage.css";

// Test component
function Photogrid() {
    return (
        <div>
            <h1>PHOTOS</h1>
            <div class="container-fluid">
                <div class="row">
                    <div class="col" id="image-col">
                        1 of 3
                        <img class="card-images" src={require("../assets/image-1.jpeg")} alt=""></img>
                    </div>
                    <div class="col" id="image-col">
                        2 of 3
                        <img class="card-images" src={require("../assets/image-2.jpeg")} alt=""></img>
                    </div>
                    <div class="col" id="image-col">
                        3 of 3
                        <img class="card-images" src={require("../assets/image-3.jpeg")} alt=""></img>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        1 of 3
                    </div>
                    <div class="col-6">
                        2 of 3
                    </div>
                    <div class="col">
                        3 of 3
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        1 of 3
                    </div>
                    <div class="col-6">
                        2 of 3
                    </div>
                    <div class="col">
                        3 of 3
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photogrid;
