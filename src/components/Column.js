import React from "react";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";

export default class Column extends React.Component {
  renderImages = () => {
    const props = this.props;
    const length = props.images.length;

    return (
      <div className="images">
        <div style={{ position: "relative" }}>
          <Parallax
            style={{ test: "none" }}
            className="preview1"
            offsetYMax={10}
            offsetYMin={-10}
            slowerScrollRate
            tag="parallax"
          >
            <img src={props.images[0]} alt="preview" />
          </Parallax>
          {props.images.length > 1 ? (
            <Parallax
              className="preview2"
              offsetYMax={15}
              offsetYMin={10}
              tag={length > 2 ? "parallax" : "div"}
            >
              <img src={props.images[1]} alt="preview" />
            </Parallax>
          ) : null}
          {length > 2 ? (
            <Parallax
              className="preview3"
              offsetYMax={10}
              offsetYMin={55}
              tag="div"
            >
              <img src={props.images[2]} alt="preview" />
            </Parallax>
          ) : null}
        </div>
      </div>
    );
  };

  render() {
    const props = this.props;

    const activeButton = (
      <button className="submit button">
        <a href={props.demo}>{props.demoString}</a>
      </button>
    );

    const inactiveButton = (
      <button className="submit button disabled">{props.demoString}</button>
    );

    return (
      <section className="column">
        <div className="info">
          <img className="icon" src={props.icon} alt="icon" />
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <div className="divider" />
          <ul>
            <li>
              <strong>Role:</strong>
              {` ${props.role}`}
            </li>
            <li>
              <strong>Team:</strong>
              {` ${props.team}`}
            </li>
            <li>
              <strong>Date:</strong>
              {` ${props.date}`}
            </li>
          </ul>
          {props.demo !== "" ? activeButton : inactiveButton}
        </div>
        {this.renderImages()}
      </section>
    );
  }
}

Column.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  demoString: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired
};
