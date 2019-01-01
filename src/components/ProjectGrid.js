import React from "react";
import PropTypes from "prop-types";
import Column from "./Column";

export default class ProjectGrid extends React.Component {
  
  renderProjects = () => {
    return this.props.projects.map(project => (
      <Column
        key={project.name}
        name={project.name}
        icon={project.icon}
        description={project.description}
        role={project.role}
        team={project.team}
        date={project.date}
        source={project.source}
        demo={project.demo}
        demoString={project.demoString}
        images={project.images}
      />
    ));
  };

  render() {
    return this.renderProjects();
  }
}

PropTypes.propTypes = {
  projects: PropTypes.string.isRequired
};
