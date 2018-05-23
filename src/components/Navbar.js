import React from 'react'

export default class Navbar extends React.Component{
    render(){
        return <nav className='navbar'>
            <div className='container'>
                <div className='navbar-header'>
                    <a href='#'>
                        <div className='logo'>
                            Juan
                        </div>
                    </a>
                </div>
                <div className='collapse navbar-collapse'>
                    <ul class="nav">
                        <li> <a href='#home'>Home</a>
                        </li>
                        <li> <a href='#about'>About</a>
                        </li>
                        <li> <a href='#experience'>Experience</a>
                        </li>
                        <li> <a href='#education'>Education</a>
                        </li>
                        <li> <a href='#projects'>Projects</a>
                        </li>
                        <li> <a href='#skills'>Skills</a>
                        </li>
                        <li> <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}
