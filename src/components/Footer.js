import React from 'react'
import {jarallax} from 'jarallax'
const style = {backgroundImage: 'url(./images/footer.jpg)'}

export default class Footer extends React.Component{
  render(){
    return <footer className="jarallax" data-jarallax data-speed="0.2" style={style} >
      <div className='container'>
        <div className='logo'>
            <img alt='Logo'></img>
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
      <div className='copyright clearfix'>
       Copyright © {new Date().getFullYear()} Juan Castillo
      </div>
    </footer>
  }
}
