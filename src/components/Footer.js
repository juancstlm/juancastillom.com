import React from "react";
import MarkdownViewer from "./MarkdownViewer";
const contact = require("../data/footer.md");

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="logo">
            <img src="./images/logo.png" alt="logo" />
          </div>
          <div>
            <MarkdownViewer src={contact}/>
          </div>
        </div>
      </footer>
    );
  }
}
