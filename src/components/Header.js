import React from 'react'

const style = {backgroundImage: 'url(http://hisham.bitballoon.com/img/bg.jpg)', backgroundPosition: '0 0'}

export default class Header extends React.Component{

    render(){
        return(
            <section id='home' className='header'
                     style={style}>
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