import React from 'react'
import marked from 'marked'
import MarkdownViewer from './MarkdownViewer'
import content from '../data/footer.md'

export default class Footer extends React.Component{
  render(){
    console.log(content)
    const contact = 'You can see more of my work on [GitHub](https://github.com/juancstlm). You can also contact me directly [here]() or email me at [juancstlm@gmail.com](mailto:juancstlm@gmail.com).'
    return <footer >
      <div className='container'>
        <div className='logo'>
            <img src='./images/logo.png' alt='logo'></img>
        </div>
        <div>
          <MarkdownViewer markdown={contact}/>
        </div>
        <div className='social_links'>
          <a href='https://www.flickr.com/photos/164979468@N08/'>
            <img src='./images/social/flickr_logo.svg'></img>
          </a>
          <a href='https://github.com/juancstlm'>
            <img src='./images/social/github_logo.svg'></img>
          </a>
        </div>
      </div>
    </footer>
  }
}
