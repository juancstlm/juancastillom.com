import React from 'react'
import {jarallax} from 'jarallax';
const style = {backgroundImage: 'url(https://imgur.com/tanGNuZ.jpg', height: '10rem'}

export default class BehindTheScenes extends React.Component{
  componentDidMount() {
      jarallax(document.querySelectorAll('.jarallax'));
    }
    componentWillUnmount() {
   jarallax(document.querySelectorAll('.jarallax'), 'destroy');
  }
  render(){
    return <div className='jarallax' data-jarallax data-speed="0.2"
                style={style}
              >
            </div>
  }
}
