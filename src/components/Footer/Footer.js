import React from "react";
import MarkdownViewer from "../MarkdownViewer";
var contact = require("../../data/footer.md");

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <MarkdownViewer markdown={contact.default} />
      </div>
    </footer>
  );
};

export default Footer;
