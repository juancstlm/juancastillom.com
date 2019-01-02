import React from "react";
import MarkdownViewer from "./MarkdownViewer";
var contact = require("../data/footer.md");

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="logo">
            <img src="./images/logo.png" alt="logo" />
          </div>
          <MarkdownViewer src={contact} />
        </div>
      </footer>
    );
  }
}
