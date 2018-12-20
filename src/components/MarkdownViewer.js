import React from 'react'
import marked from 'marked'

export default class MarkdownViewer extends React.Component{
  render() {
    var markdown = marked(this.props.markdown);
    return <div dangerouslySetInnerHTML={{__html:markdown}} />;
  }
}