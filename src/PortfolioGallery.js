import React from "react";

function PortfolioGallery() {

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
        <button className="btn active" onClick={() => filterSelection("all")}>
          Show all
        </button>
        <button className="btn" onClick={() => filterSelection("mobile")}>
          Mobile
        </button>
        <button className="btn" onClick={() => filterSelection("web")}>
          Web
        </button>
      </div>
      <div className="container">
        <div className="filter-div div1 mobile show">Poofers</div>
        <div className="filter-div div2 mobile show">Unmix Gallery</div>
        <div className="filter-div div3 web show">Web 1</div>
        <div className="filter-div div4 web show">Web 2</div>  
        <div className="filter-div div5 web show">Web 3</div>  
      </div>
    </div>
  );
}

export default PortfolioGallery;
