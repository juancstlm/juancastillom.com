import React from 'react'
const style = {backgroundImage: 'url(https://imgur.com/tanGNuZ.jpg', height: '10rem'}

export default class BehindTheScenes extends React.Component{
  render(){
    return <div className='rellax' data-jarallax data-speed="0.2"
                style={style}
              >
            </div>
  }
}
