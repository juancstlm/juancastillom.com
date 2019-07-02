import React from "react";
import PropTypes from "prop-types";
import ProjectShowcase from "./ProjectShowcase";

const ProjectGrid = ({ projects }) => {
  return projects.map(project => {
    return <ProjectShowcase project={project} />;
  });
};

ProjectGrid.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectGrid;
