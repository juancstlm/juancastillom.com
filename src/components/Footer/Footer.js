import React from "react";
// import MarkdownViewer from "../MarkdownViewer";
// var contact = require("../../data/footer.md");

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <img src="./images/logo.png" alt="logo" />
        </div>
        {/*<MarkdownViewer markdown={contact.default} />*/}
        <div><h3>You can see more of my work on <a href="https://github.com/juancstlm">GitHub</a>. You can also contact me directly <a href="mailto:juancstlm@gmail.com">here</a>.</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
