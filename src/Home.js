import React from "react";

function Home() {
  return (
    <div className="wrapper-home">
      <div className="wrapper-home-content">
        <p className="home-text">
          Hello, I'm <span className="name-text">Francis</span>
          <span id="appear">
            <img id="smiley" src={require("./images/smiley.png")}  alt="smileyimg" />
          </span>
          <br />I love to create apps!
        </p>
        <div className="wrapper-explore moon-child-font">
          <a href="#about">
            Explore
          </a>
          {/* <img className="explore-arrow" src={explorearrow} alt="Explore Arrow"/> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
