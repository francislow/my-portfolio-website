import React, { useState } from "react";

import poofersimg from "./images/poofersimg.png";
import unmiximg from "./images/unmiximg.png";
import emailyyimg from "./images/emailyyimg.png";
import assembleimg from "./images/assembleimg.png";
import ProjectComponent from "./ProjectComponent";

function ProjectGallery() {
  const [firstBtnActivity, setFirstBtnActivity] = useState("active");
  const [secondBtnActivity, setSecondBtnActivity] = useState("inactive");
  const [thirdBtnActivity, setThirdBtnActivity] = useState("inactive");

  function filterSelection(filterSelected) {
    let divsToShow;
    if (filterSelected === "all") {
      divsToShow = document.getElementsByClassName("filter-div");
    } else {
      divsToShow = document.getElementsByClassName(filterSelected);
    }
    hideAllDivs();
    showRequestedDivs(divsToShow);
  }

  function hideAllDivs() {
    const allDivs = document.getElementsByClassName("filter-div");
    for (let i = 0; i < allDivs.length; i++) {
      if (allDivs[i].className.includes("show")) {
        allDivs[i].className = allDivs[i].className.replace("show", "hide");
      }
    }
  }

  function showRequestedDivs(divsToShow) {
    for (let i = 0; i < divsToShow.length; i++) {
      divsToShow[i].className = divsToShow[i].className.replace("hide", "show");
    }
  }

  return (
    <div className="wrapper-portfolio-gallery">
      <div className="wrapper-buttons">
        <button
          className={`btn ${firstBtnActivity}`}
          onClick={() => {
            setFirstBtnActivity("active");
            setSecondBtnActivity("inactive");
            setThirdBtnActivity("inactive");
            filterSelection("all");
          }}
        >
          ALL
        </button>
        <button
          className={`btn ${secondBtnActivity}`}
          onClick={() => {
            setFirstBtnActivity("inactive");
            setSecondBtnActivity("active");
            setThirdBtnActivity("inactive");
            filterSelection("mobile");
          }}
        >
          MOBILE
        </button>
        <button
          className={`btn ${thirdBtnActivity}`}
          onClick={() => {
            setFirstBtnActivity("inactive");
            setSecondBtnActivity("inactive");
            setThirdBtnActivity("active");
            filterSelection("web");
          }}
        >
          WEB
        </button>
      </div>
      <div className="container">
        <ProjectComponent
          keyId="poofers"
          img={poofersimg}
          type="mobile"
          altImgText="poofersimg"
          name="Poofers"
          tools="Native Android"
        />
        <ProjectComponent
          keyId="unmix"
          img={unmiximg}
          type="mobile"
          altImgText="unmiximg"
          name="Unmix"
          tools="Native Android"
        />
        <ProjectComponent
          keyId="emailyy"
          img={emailyyimg}
          type="web"
          altImgText="emailyyimg"
          name="Emailyy"
          tools="Web App"
        />
        <ProjectComponent
          keyId="assemble"
          img={assembleimg}
          type="mobile"
          altImgText="assembleimg"
          name="Assemble"
          tools="Cross-platform Mobile App"
        />
      </div>
    </div>
  );
}

export default ProjectGallery;
