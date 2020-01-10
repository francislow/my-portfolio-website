import React, { useState } from "react";

import * as projectsData from "./projectsData.json";

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import poorferimg1 from "./images/poofer-img-1.png";
import poorferimg2 from "./images/poofer-img-2.png";
import poorferimg3 from "./images/poofer-img-3.png";
import poorferimg4 from "./images/poofer-img-4.png";

function ProjectModelBox(props) {
  // All images (load all images here to solve the require() problem as static paths are required)
  const projectImgsHolder = {
    poofers: [
      {id: 1, url: require("./images/pooferitem.png")},
      {id: 2, url: poorferimg1},
      {id: 3, url: poorferimg2},
      {id: 4, url: poorferimg3},
      {id: 5, url: poorferimg4},
    ],
    unmix: [
      {id: 6, url: require("./images/unmixitem.png")},
      {id: 7, url: require("./images/unmix-img-1.png")},
      {id: 8, url: require("./images/unmix-img-2.png")},
      {id: 9, url: require("./images/unmix-img-3.png")}
    ],
    "portfolio-website": [
      {id: 10, url: require("./images/port-web-img-1.png")},
      {id: 11, url: require("./images/port-web-img-2.png")},
      {id: 12, url: require("./images/port-web-img-3.png")},
      {id: 13, url: require("./images/port-web-img-4.png")}
    ]
  };

  const keyID = props.keyID;
  const projectName = projectsData.default[keyID].projectName;
  const projectDesc = projectsData.default[keyID].projectDesc;
  const sourceCodeLink = projectsData.default[keyID].sourceCodeLink;
  const projectTools = projectsData.default[keyID].devTools;
  const playstoreUrl = projectsData.default[keyID].playstoreUrl;
  const isOnPlaystore = projectsData.default[keyID].isOnPlaystore;
  const projectImgs = projectImgsHolder[keyID];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  function setNextImg() {
    let newIndex =
      currentImgIndex === projectImgs.length - 1 ? 0 : currentImgIndex + 1;
    setCurrentImgIndex(newIndex);
  }

  function setPrevImg() {
    let newIndex =
      currentImgIndex === 0 ? projectImgs.length - 1 : currentImgIndex - 1;
    setCurrentImgIndex(newIndex);
  }

  const devtoolComponents = projectTools.map(tool => {
    return <div>{tool}</div>;
  });

  return (
    // Model content
    <div className={`wrapper-project-model ${props.visibility}`}>
      <div className="content">
        <div className="flex-1">
          <TransitionGroup>
            <CSSTransition key={projectImgs[currentImgIndex].id} timeout={400} classNames="fade">
              <img className="display-img" src={projectImgs[currentImgIndex].url} alt="projectimg" />
            </CSSTransition>
          </TransitionGroup>
        </div>
        <div className="flex-2">
          <img onClick={setPrevImg} className="left-arrow" src={require("./images/leftarrow.png")} />
          <div>{currentImgIndex + 1}</div>
          <img onClick={setNextImg} className="right-arrow" src={require("./images/rightarrow.png")} />
        </div>
        <div className="flex-3">
          <div>{projectName}</div>
        </div>
        <div className="flex-4">
          <p>{projectDesc}</p>
        </div>
        <div className="flex-5">
          <div className="wrapper-dev-tools">{devtoolComponents}</div>
        </div>
        {isOnPlaystore ? (
          <div className="flex-6">
            <a target="_blank" rel="noopener noreferrer" href={playstoreUrl}>
              <img
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png"
              />
            </a>
          </div>
        ) : null}
        <div className="flex-7">
          <div>
            <a target="_blank" rel="noopener noreferrer" href={sourceCodeLink}>
              Source Code
            </a>
          </div>
          <span
            onClick={() => props.setVisibility("invisible")}
            className="close-btn"
          >
            &times;
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectModelBox;
