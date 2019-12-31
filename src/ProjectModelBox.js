import React from "react";

import * as projectsData from "./projectsData.json";

function ProjectModelBox(props) {
  // All images (load all images here to solve the require() problem as static paths are required)
  const projectImgsHolder = {
    poofers: require("./images/pooferitem.png"),
    unmix: require("./images/unmixitem.png"),
    "portfolio-website": require("./images/noimageitem.png")
  };

  const keyID = props.keyID;
  const projectName = projectsData.default[keyID].projectName;
  const projectDesc = projectsData.default[keyID].projectDesc;
  const sourceCodeLink = projectsData.default[keyID].sourceCodeLink;
  const projectTools = projectsData.default[keyID].devTools;
  const playstoreUrl = projectsData.default[keyID].playstoreUrl;
  const isOnPlaystore = projectsData.default[keyID].isOnPlaystore;
  const projectImg = projectImgsHolder[keyID];

  const devtoolComponents = projectTools.map(tool => {
    return <div>{tool}</div>;
  });

  return (
    // Model content
    <div className={`wrapper-project-model ${props.visibility}`}>
      <div className="content">
        <div className="flex-1">
          <img src={projectImg} alt="projectimg" />
        </div>
        <div className="flex-2">
          <div>{projectName}</div>
        </div>
        <div className="flex-3">
          <p>{projectDesc}</p>
        </div>
        <div className="flex-4">
          <div className="wrapper-dev-tools">{devtoolComponents}</div>
        </div>
        {isOnPlaystore ? (
          <div className="flex-5">
            <a target="_blank" rel="noopener noreferrer" href={playstoreUrl}>
              <img
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png"
              />
            </a>
          </div>
        ) : null}
        <div className="flex-6">
          <div>
            <a target="_blank" rel="noopener noreferrer" href={sourceCodeLink}>
              Source Code
            </a>
          </div>
          <span onClick={() => props.setVisibility("invisible")} className="close-btn">
            &times;
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectModelBox;
