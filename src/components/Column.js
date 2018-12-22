import React from "react";
import { Parallax } from "react-scroll-parallax";

export default class Column extends React.Component {
  render() {
    return (
      <section className="column">
        <div className="info">
          <img className="icon" src="images/projects/wemart-icon.png" alt='icon'/>
          <h2>WeMart</h2>
          <p><span role='img' aria-label='shopping cart'>🛒</span> Online grocery shopping portal. Created as part of the course
            CmpE 133 during spring 2018. The objective was rebuilt the old
            Safeway.com and redesign it using React.
          </p>
          <div className="divider" />
          <ul>
            <li>
              <strong>Role:</strong> Front-end developer
            </li>
            <li>
              <strong>Team:</strong> PM + 7 Devs and me
            </li>
            <li>
              <strong>Date:</strong> Jan. 2018
            </li>
          </ul>
          <button className="submit button">
            <a href="https://wemart-133.herokuapp.com">Launch website →</a>
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
            <img src="images/projects/wemart.png" alt='preview' />
          </Parallax>
          <Parallax
            className="preview2"
            offsetYMax={10}
            offsetYMin={-10}
            tag="figure"
          >
            <img src="images/projects/wemart-mobile.png" alt='preview' />
          </Parallax>
        </div>
      </section>
    );
  }
}
