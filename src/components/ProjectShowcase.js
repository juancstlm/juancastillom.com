import React from "react";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";

const ProjectShowcase = ({ project }) => {
  const {
    name,
    icon,
    description,
    role,
    team,
    date,
    demo,
    demoString,
    images
  } = project;

  const renderImages = () => {
    const length = project.images.length;

    return (
      <div className="images">
        <div style={{ position: "relative" }}>
          <Parallax
            className="preview1"
            offsetYMax={10}
            offsetYMin={-10}
            slowerScrollRate
            tag="parallax"
          >
            <img src={images[0]} alt="preview" />
          </Parallax>
          {length > 1 ? (
            <Parallax
              className="preview2"
              offsetYMax={15}
              offsetYMin={10}
              tag={length > 2 ? "parallax" : "div"}
            >
              <img src={images[1]} alt="preview" />
            </Parallax>
          ) : null}
          {length > 2 ? (
            <Parallax
              className="preview3"
              offsetYMax={10}
              offsetYMin={-20}
              tag="div"
            >
              <img src={images[2]} alt="preview" />
            </Parallax>
          ) : null}
        </div>
      </div>
    );
  };

  const buttonClass = demo !== "" ? "submit button" : "submit button disabled";

  const demoButton = (
    <button className={buttonClass}>
      <a href={demo} aria-disabled={true}>
        {demoString}
      </a>
    </button>
  );

  return (
    <section className="column">
      <div className="info">
        <img className="icon" src={icon} alt="icon" />
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="divider" />
        <ul>
          <li>
            <strong>Role:</strong>
            {` ${role}`}
          </li>
          <li>
            <strong>Team:</strong>
            {` ${team}`}
          </li>
          <li>
            <strong>Date:</strong>
            {` ${date}`}
          </li>
        </ul>
        {demoButton}
      </div>
      {renderImages()}
    </section>
  );
};

ProjectShowcase.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectShowcase;
