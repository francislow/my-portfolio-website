import React from "react";

function NavbarDesktop() {
  return (
    <nav id="normal-nav" className="navbar desktop-only">
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
  );
}

export default NavbarDesktop;
