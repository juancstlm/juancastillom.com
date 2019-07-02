import React from "react";
import PropTypes from "prop-types";

const MarkdownViewer = ({ markdown }) => {
  return <div dangerouslySetInnerHTML={{ __html: markdown }} />;
};

export default MarkdownViewer;

MarkdownViewer.propTypes = {
  markdown: PropTypes.any.isRequired
};
