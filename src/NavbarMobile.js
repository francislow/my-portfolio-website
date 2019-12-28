import React from "react";
import NavbarMobileItem from "./NavbarMobileItem";

function NavbarMobile() {
  return (
    <div className="mobile-only">
      <div id="collapsible-nav" className="collapse">
        <nav className="navbar">
          <ul className="nav navbar-nav">
            <NavbarMobileItem name="HOME" ref_id="#home" />
            <NavbarMobileItem name="ABOUT" ref_id="#about" />
            <NavbarMobileItem name="PORTFOLIO" ref_id="#portfolio" />
            <NavbarMobileItem name="CONTACT" ref_id="#contact" />
          </ul>
        </nav>
      </div>
      <button
        className="collapse-btn navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsible-nav"
      >
        &#9776;
      </button>
    </div>
  );
}

export default NavbarMobile;
