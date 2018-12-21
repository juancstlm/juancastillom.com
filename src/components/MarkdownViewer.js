import React from "react";
import PropTypes from "prop-types";

export default class MarkdownViewer extends React.Component {
  state = {
    markdown: ""
  };

  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.props.src }} />;
  }
}
MarkdownViewer.propTypes = {
  src: PropTypes.any.isRequired
};
