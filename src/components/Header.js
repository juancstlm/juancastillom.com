import React from 'react'
import {
    jarallax,
    jarallaxElement,
} from 'jarallax';
const style = {backgroundImage: 'url(http://hisham.bitballoon.com/img/bg.jpg)'}

export default class Header extends React.Component{

  componentDidMount() {
      jarallax(document.querySelectorAll('.jarallax'));
    }
    componentWillUnmount() {
   jarallax(document.querySelectorAll('.jarallax'), 'destroy');
  }
    render(){
        return(
            <section id='home' className='header jarallax'
                     style={style} data-jarallax data-speed="0.2">
                <div className='container'>
                    <div className='middle'>
                        <div className='caption'>
                            <h4>Hello</h4>
                            <h1>I Am NAME HERE</h1>
                            <h6>Software Engineer</h6>
                        </div>
                    </div>
                </div>
            </section>)
    }
}
