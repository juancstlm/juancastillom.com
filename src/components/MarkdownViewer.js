import React from "react";
import PropTypes from "prop-types";
import marked from 'marked'

const MarkdownViewer = ({ markdown }) => {
  const [mkdown, setMarkdown] = React.useState();
  fetch(markdown)
    .then(response => {
      return response.text()
    })
    .then(text => {
      setMarkdown(marked(text));
    })

  return <div dangerouslySetInnerHTML={{ __html: mkdown }} />;
};

export default MarkdownViewer;

MarkdownViewer.propTypes = {
  markdown: PropTypes.any
};
