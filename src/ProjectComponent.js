import React from "react";
import { Link } from "react-router-dom";

function ProjectComponent(props) {
  return (
    <div
      className={`filter-div photo-frame-container ${props.specifiedGridDiv} ${props.type} show`}
    >
      <img src={props.img} alt={props.altImgText} />
      <div className="overlay">
        <div className="project-text">
          <div className="project-name">{props.name}</div>
          <div className="main-tools">{props.tools}</div>
        </div>
        <Link to={`/project-item/${props.keyId}`}>
          <div className="wrapper-info">
            More Info
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectComponent;
