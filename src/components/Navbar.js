import React from 'react'

export default class Navbar extends React.Component{
    render(){
        return <nav className='navbar navbar-default'>
            <div className='container'>
                <div className='navbar-header'>
                    <a href='#'>
                        <div className='logo'>
                            Juan
                        </div>
                    </a>
                </div>
                <div className='collapse navbar-collapse'>
                    <ul class="nav navbar-nav navbar-right">
                        <li> <a>Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}