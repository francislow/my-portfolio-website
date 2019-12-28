import React from "react";

import poofersimg from "./images/poofersimg.png";
import unmiximg from "./images/unmiximg.png";
import portfoliopageimg from "./images/portfoliopageimg.png";
import ProjectComponent from "./ProjectComponent";

function ProjectGallery() {
  function filterSelection(event, filterSelected) {
    setActiveButton(event);

    let divsToShow;
    if (filterSelected === "all") {
      divsToShow = document.getElementsByClassName("filter-div");
    } else {
      divsToShow = document.getElementsByClassName(filterSelected);
    }
    hideAllDivs();
    showRequestedDivs(divsToShow);
  }

  function setActiveButton(event) {
    // Unset active btn
    const allBtns = document.getElementsByClassName("btn");
    for (let i = 0; i < allBtns.length; i++) {
      if (allBtns[i].className.includes("active")) {
        allBtns[i].className = allBtns[i].className.replace(" active", "");
      }
    }
    // Set active btn
    event.target.className += " active";
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
          className="btn active moon-child-font"
          onClick={event => filterSelection(event, "all")}
        >
          Show all
        </button>
        <button
          className="btn moon-child-font"
          onClick={event => filterSelection(event, "mobile")}
        >
          Mobile
        </button>
        <button
          className="btn moon-child-font"
          onClick={event => filterSelection(event, "web")}
        >
          Web
        </button>
      </div>
      <div className="container">
        <ProjectComponent
          specifiedGridDiv="div1"
          keyId="poofers"
          img={poofersimg}
          type="mobile"
          altImgText="poofersimg"
          name="Poofers"
          tools="Native Android"
        />
        <ProjectComponent
          specifiedGridDiv="div2"
          keyId="unmix"
          img={unmiximg}
          type="mobile"
          altImgText="unmiximg"
          name="Unmix"
          tools="Native Android"
        />
        <ProjectComponent
          specifiedGridDiv="div3"
          keyId="portfolio-website"
          img={portfoliopageimg}
          type="web"
          altImgText="portfoliowebimg"
          name="Portfolio"
          tools="React"
        />
      </div>
    </div>
  );
}

export default ProjectGallery;
