import React, { useEffect, useState } from "react";
import rightnavarrow from "./images/rightarrow.png";
import leftnavarrow from "./images/leftarrow.png";
import * as projectsData from "./projectsData.json";

function ProjectItemPage({ match }) {
  // All images (load all images here to solve the require() problem as static paths are required)
  const projectImgsHolder = {
      "poofers": require("./images/pooferitem.png"),
      "unmix": require("./images/unmixitem.png"),
      "portfolio-website": require("./images/noimageitem.png")
  };

  const key = match.params.key;
  const projectName = projectsData.default[key].projectName;
  const projectDesc = projectsData.default[key].projectDesc;
  const sourceCodeLink = projectsData.default[key].sourceCodeLink;
  const projectTools = projectsData.default[key].devTools;
  const playstoreUrl = projectsData.default[key].playstoreUrl;
  const isOnPlaystore = projectsData.default[key].isOnPlaystore;
  const projectImg = projectImgsHolder[key];

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
          <div className="grid-div project-name-div1">
            <p>Title:</p>
          </div>
          <div className="grid-div project-name-div2">
            <p>{projectName}</p>
          </div>
          <div className="grid-div project-desc-div1">
            <p>Description:</p>
          </div>
          <div className="grid-div project-desc-div2">
            <p>{projectDesc}</p>
          </div>
          <div className="grid-div project-tools-div1">
            <p>Development Tool:</p>
          </div>
          <div className="grid-div project-tools-div2">
            <p>{projectTools}</p>
          </div>
          <div className="grid-div project-code-div1">
            <p>Source Code:</p>
          </div>
          <div className="grid-div project-code-div2">
            <p><a target="_blank" href={sourceCodeLink}>{sourceCodeLink}</a></p>
          </div>
        </div>
      </div>
      <div className="wrapper-download-region">
        {isOnPlaystore ? <a
          target="_blank"
          href={playstoreUrl}>
          <img
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png"
          />
        </a> : null}
      </div>
    </div>
  );
}

export default ProjectItemPage;
