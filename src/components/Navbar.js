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
                        <li> <a>Home</a>
                        </li>
                        <li> <a>About</a>
                        </li>
                        <li> <a>Experience</a>
                        </li>
                        <li> <a>Education</a>
                        </li>
                        <li> <a>Projects</a>
                        </li>
                        <li> <a>Skills</a>
                        </li>
                        <li> <a>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}