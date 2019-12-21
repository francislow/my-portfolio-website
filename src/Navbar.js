import React from "react";

import "./app.css";

function NavBar() {
  return (
    <>
      <div class="mobile-only">
        <nav id="collapsible-nav" class="navbar collapse">
          <ul class="nav navbar-nav moon-child-font">
            <li
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#collapsible-nav"
            >
              <a href="#home">Home</a>
            </li>
            <li
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#collapsible-nav"
            >
              <a href="#about">About</a>
            </li>
            <li
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#collapsible-nav"
            >
              <a href="#portfolio">Portfolio</a>
            </li>
            <li
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#collapsible-nav"
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button
          class="collapse-btn navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsible-nav"
        >
          &#9776;
        </button>
      </div>

      <div class="desktop-only">
        <nav id="normal-nav" class="navbar">
          <ul class="nav moon-child-font">
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
