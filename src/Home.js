import React from "react";

function Home() {
  return (
    <div className="wrapper-home">
      <div className="wrapper-home-content">
        <p className="name-text moon-child-font">Hi, I'm Francis</p>
        <p className="welcome-text m-black-font">WELCOME TO MY PAGE!</p>
        <div className="wrapper-explore moon-child-font">
          <a href="#about" target="_self">Explore</a>
          {/* <img className="explore-arrow" src={explorearrow} alt="Explore Arrow"/> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
