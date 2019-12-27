import React, { useEffect, useState } from "react";
import rightnavarrow from "./images/rightarrow.png";
import leftnavarrow from "./images/leftarrow.png";
import * as projectsData from "./projectsData.json";

function ProjectItemPage({ match }) {
  const [projectName, setProjectName] = useState("no project name");
  const [projectDesc, setProjectDesc] = useState("no project desc");
  const [sourceCodeLink, setSourceCodeLink] = useState("no source code link");
  const [projectImg, setProjectImg] = useState();

  // All images (load all images here to solve the require() problem as static paths are required)
  const projectImgsHolder = {
      "poofers": require("./images/pooferitem.png"),
      "unmix": require("./images/unmixitem.png")
  };

  useEffect(() => {
    let passedKey = match.params.key;
    // setState is asynchronous, console logging right after will not work
    setProjectName(projectsData.default[passedKey].projectName);
    setProjectDesc(projectsData.default[passedKey].projectDesc);
    setSourceCodeLink(projectsData.default[passedKey].sourceCodeLink);
    setProjectImg(projectImgsHolder[passedKey]);
  }, []);

  return (
    <div className="wrapper-item-page">
      <div className="wrapper-media-region">
        <div className="wrapper-selection">
          <img className="nav-arrow" src={leftnavarrow} />
          <img className="item-img" src={projectImg} />
          <img className="nav-arrow" src={rightnavarrow} />
        </div>
      </div>
      <div className="wrapper-details-region">
        <div className="wrapper-grid">
          <div className="project-name-div1">
            <p>Title:</p>
          </div>
          <div className="project-name-div2">
            <p>{projectName}</p>
          </div>
          <div className="project-desc-div1">
            <p>Description:</p>
          </div>
          <div className="project-desc-div2">
            <p>{projectDesc}</p>
          </div>
          <div className="project-code-div1">
            <p>Source Code:</p>
          </div>
          <div className="project-code-div2">
            <p>{sourceCodeLink}</p>
          </div>
        </div>
      </div>
      <div className="wrapper-download-region">
        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.chalkboyygames"
        >
          <img
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png"
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectItemPage;
