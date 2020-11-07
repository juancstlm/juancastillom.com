import React from "react";
import PropTypes from "prop-types";
import ProjectShowcase from "./ProjectShowcase";

const ProjectGrid = ({ projects }) => {
  const renderCurrentProjects = () => {
    return projects
      .filter(project => project.isCurrentProject)
      .map(project => {
        return <ProjectShowcase key={project.name} project={project} />;
      });
  };

  const renderPastProjects = () => {
    return projects
      .filter(project => !project.isCurrentProject)
      .map(project => {
        return <ProjectShowcase project={project} />;
      });
  }

  return <div>
    <div>
      <h1 className={'current-projects-title'}>What I'm Working On</h1>
      <br/>
      {renderCurrentProjects()}
    </div>
    <div>
      <h1 className={'past-projects-title'}>Past Projects</h1>
      {renderPastProjects()}
    </div>
  </div>;
};

ProjectGrid.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectGrid;
