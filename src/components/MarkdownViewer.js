import React from "react";
import marked from "marked";

export default class MarkdownViewer extends React.Component {
  state = {
    markdown: ""
  };

  componentDidMount() {
    const readmePath = this.props.src;

    fetch(readmePath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          markdown: marked(text)
        });
      });
  }

  render() {
    const { markdown } = this.state;
    return <div dangerouslySetInnerHTML={{ __html: markdown }} />;
  }
}
