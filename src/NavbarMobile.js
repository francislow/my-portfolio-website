import React from "react";
import NavbarMobileItem from "./NavbarMobileItem";

function NavbarMobile() {
  return (
    <div className="mobile-only">
      <nav id="collapsible-nav" className="navbar collapse">
        <ul className="nav navbar-nav moon-child-font">
          <NavbarMobileItem name="Home" ref_id="#home" />
          <NavbarMobileItem name="About" ref_id="#about" />
          <NavbarMobileItem name="Portfolio" ref_id="#portfolio" />
          <NavbarMobileItem name="Contact" ref_id="#contact" />
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
  );
}

export default NavbarMobile;
