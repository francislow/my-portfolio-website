import React from "react";
import ProjectGallery from "./ProjectGallery";
import Header from "./Header";

function Project() {
  return (
    <div className="wrapper-page-content portfolio-page">
      <Header title="PROJECTS"/>
      <ProjectGallery />
    </div>
  );
}

export default Project;
