import React from "react";
import MarkdownViewer from "./MarkdownViewer";
const about = require("../data/about.md");

export default class Header extends React.Component {
  render() {
    return (
      <section id="home" className="middle">
          <MarkdownViewer src={about} />
        <a className="scroll home-s-btn hor-center">
          <span className="dot center" />
        </a>
      </section>
    );
  }
}
