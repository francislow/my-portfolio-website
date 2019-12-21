import React from "react";
import smiley from "./images/smiley.png";
import explorearrow from "./images/explore-arrow.png";

import "./app.css";

function Home() {
  return (
    <div class="wrapper-home">
      <div class="wrapper-home-content">
        <p class="name-text moon-child-font">Hi, I'm Francis</p>
        <p class="welcome-text m-black-font">WELCOME TO MY PAGE!</p>
        {/* <img src={smiley} alt="Smiley face" /> */}
        <div class="wrapper-explore moon-child-font">
          <a href="#about">Explore</a>
          {/* <img className="explore-arrow" src={explorearrow} alt="Explore Arrow"/> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
