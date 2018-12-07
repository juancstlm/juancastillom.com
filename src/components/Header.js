import React from "react";
import WordScroller from "./WordScroller";
const style = {
  backgroundImage: "url(http://hisham.bitballoon.com/img/bg.jpg)"
};
const languages = ["Hello", "Hola", "Здравствуйте!", "Hallo"];
export default class Header extends React.Component {
  render() {
    return (
      <section
        id="home"
        className="header rellax"
        style={style}
        data-jarallax
        data-speed="0.2"
      >
        <div className="container">
          <div className="middle">
            <div className="caption">
              <WordScroller words={languages} />
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
