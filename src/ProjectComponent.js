import React, { useState } from "react";
import ProjectModelBox from "./ProjectModelBox";

function ProjectComponent(props) {
  const [modelVisibility, setModelVisiblility] = useState("invisible");
  return (
    <>
      <div
        className={`filter-div photo-frame-container ${props.specifiedGridDiv} ${props.type} show`}
      >
        <img src={props.img} alt={props.altImgText} />
        <div className="overlay">
          <div className="project-text">
            <div className="project-name">{props.name}</div>
            <div className="main-tools">{props.tools}</div>
          </div>
          <div
            onClick={() => setModelVisiblility("visible")}
            className="wrapper-info"
          >
            More Info
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
