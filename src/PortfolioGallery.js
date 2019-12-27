import React from "react";
import { Link } from "react-router-dom";

import poofersimg from "./images/poofersimg.png";
import unmiximg from "./images/unmiximg.png";
import portfoliopageimg from "./images/portfoliopageimg.png";

function PortfolioGallery() {
  function filterSelection(event, filterSelected) {
    changeActiveButton(event);

    let divsToShow;
    if (filterSelected === "all") {
      divsToShow = document.getElementsByClassName("filter-div");
    } else {
      divsToShow = document.getElementsByClassName(filterSelected);
    }
    hideAllDivs();
    showRequestedDivs(divsToShow);
  }

  function changeActiveButton(event) {
    // Unset active btn
    const allBtns = document.getElementsByClassName("btn");
    for (let i = 0; i < allBtns.length; i++) {
      if (allBtns[i].className.includes("active")) {
        allBtns[i].className = allBtns[i].className.replace(" active", "");
      }
    }
    // Set active btn
    event.target.className += " active";
    console.log(event.target.className);
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
        <div className="filter-div photo-frame-container div1 mobile show">
          <Link to="/project-item/poofers">
            <img src={poofersimg} />
            <div className="overlay">
              <p className="project-name-text moon-child-font">Poofers</p>
            </div>
          </Link>
        </div>

        <div className="filter-div photo-frame-container div2 mobile show">
          <Link to="/project-item/unmix">
            <img src={unmiximg} />
            <div className="overlay">
              <p className="project-name-text moon-child-font">Unmix</p>
            </div>
          </Link>
        </div>
        <div className="filter-div photo-frame-container div3 web show">
          <Link to="/project-item/portfolio-website">
            <img src={portfoliopageimg} />
            <div className="overlay">
              <p className="project-name-text moon-child-font">
                Portfolio Page
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PortfolioGallery;
