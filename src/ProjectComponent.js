import React, { useState } from "react";
import ProjectModelBox from "./ProjectModelBox";

function ProjectComponent(props) {
  const [modelVisibility, setModelVisiblility] = useState("invisible");
  return (
    <>
      <div
        className={`filter-div photo-frame-container project-flex-item ${props.type} show`}
        style={{ backgroundImage: `url(${props.img})` }}
      >
        {/* <img src={props.img} alt={props.altImgText} height="100%"/> */}
        <div className="overlay">
          <div className="project-text">
            <div className="project-name">{props.name}</div>
            <div className="main-tools">{props.tools}</div>
          </div>
          <div
            onClick={() => setModelVisiblility("visible")}
            className="wrapper-info"
          >
            View
          </div>
        </div>
      </div>
      <ProjectModelBox
        keyID={props.keyId}
        setVisibility={setModelVisiblility}
        visibility={modelVisibility}
      />
    </>
  );
}

export default ProjectComponent;
