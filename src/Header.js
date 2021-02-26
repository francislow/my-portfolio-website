import React from "react";

function Header(props) {
  return (
    <>
      <p className="page-title">{props.title}</p>
      <div className="title-line"></div>
    </>
  );
}

export default Header;
