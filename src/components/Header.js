import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <section
        id="home"
        className="header"
      >
        <div className="container">
          <div className="middle">
            <div className="caption">
              <h1>I Am Juan Castillo</h1>
              <h6>Software Engineer</h6>
            </div>
          </div>
          <a className="scroll home-s-btn hor-center">
            <span className="dot center" />
          </a>
        </div>
      </section>
    );
  }
}
