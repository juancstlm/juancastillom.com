import React from "react";
// import MarkdownViewer from "./MarkdownViewer";
// const about = require("../data/about.md");

const Greeting = () => {
  return (
    <section id="home" className="middle">
      {/*<MarkdownViewer markdown={about.default} />*/}
      <div>
        <h1>I am <a href="https://juancastillom.com">Juan Castillo</a>. A software engineer based in California</h1>
      </div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href={'#'} className="scroll home-s-btn hor-center">
        <span className="dot center" />
      </a>
    </section>
  );
};

export default Greeting;
