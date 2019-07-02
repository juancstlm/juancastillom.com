import React from "react";
import MarkdownViewer from "./MarkdownViewer";
const about = require("../data/about.md");

const Greeting = () => {
  return (
    <section id="home" className="middle">
      <MarkdownViewer markdown={about} />
      <a className="scroll home-s-btn hor-center">
        <span className="dot center" />
      </a>
    </section>
  );
};

export default Greeting;
