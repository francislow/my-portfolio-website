import React from "react";

function NavbarMobileItem(props) {
  return (
    <li
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#collapsible-nav"
    >
      <a href={props.ref_id}>{props.name}</a>
    </li>
  );
}

export default NavbarMobileItem;
