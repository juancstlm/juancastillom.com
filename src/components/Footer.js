import React from 'react'
import {jarallax} from 'jarallax'
const style = {backgroundImage: 'url(./images/footer.jpg)'}

export default class Footer extends React.Component{
  render(){
    return <footer className="jarallax" data-jarallax data-speed="0.2" style={style} >
      <div className='container'>

      </div>
      <div className='copyright clearfix'>
       Copyright © {new Date().getFullYear()}
      </div>
    </footer>
  }
}
