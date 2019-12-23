import React from "react";

import "./app.css";

function NavBar() {
  return (
    <>
      <div className="mobile-only">
        <nav id="collapsible-nav" className="navbar collapse">
          <ul className="nav navbar-nav moon-child-font">
            <li
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#collapsible-nav"
            >
              <a href="#home">Home</a>
            </li>
            <li
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#collapsible-nav"
            >
              <a href="#about">About</a>
            </li>
            <li
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#collapsible-nav"
            >
              <a href="#portfolio">Portfolio</a>
            </li>
            <li
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#collapsible-nav"
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button
          className="collapse-btn navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsible-nav"
        >
          &#9776;
        </button>
      </div>

      <div className="desktop-only">
        <nav id="normal-nav" className="navbar">
          <ul className="nav moon-child-font">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
