import React from "react";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";

export default class Column extends React.Component {
  render() {
    const props = this.props;
    return (
      <section className="column">
        <div className="info">
          <img className="icon" src={props.icon} alt='icon'/>
          <h2>{props.name}</h2>
          <p>{props.description}
          </p>
          <div className="divider" />
          <ul>
            <li>
              <strong>Role:</strong>{` ${props.role}`}
            </li>
            <li>
              <strong>Team:</strong>{` ${props.team}`}
            </li>
            <li>
              <strong>Date:</strong>{` ${props.date}`}
            </li>
          </ul>
          {/*TODO If no demo grey out the button*/}
          <button className="submit button">
            <a href={props.demo}>{props.demoString}</a>
          </button>
        </div>
        <div className="images">
          <Parallax
            className="preview1"
            offsetYMax={10}
            offsetYMin={-10}
            slowerScrollRate
            tag="figure"
          >
            <img src={props.images[0]} alt='preview' />
          </Parallax>
          <Parallax
            className="preview2"
            offsetYMax={10}
            offsetYMin={-10}
            tag="figure"
          >
            <img src={props.images[1]} alt='preview' />
          </Parallax>
        </div>
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
  images: PropTypes.array.isRequired,
}
