import React from 'react'

export default class Footer extends React.Component{
  render(){
    return <footer >
      <div className='container'>
        <div className='logo'>
            <img src='./images/logo.png' alt='logo'></img>
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
