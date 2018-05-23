import React from 'react'


var navbar
var sticky
export default class Navbar extends React.Component {

  constructor(){
    super()
    window.onscroll = () => {this.onScroll()}
  }

  onScroll(){
    console.log(window.pageYOffset);
    if (window.pageYOffset > sticky) {
    navbar.classList.add("navbar-sticky")
  } else {
    navbar.classList.remove("navbar-sticky");
  }
  }
componentDidMount(){
  navbar = document.getElementById("navbar");
  sticky = navbar.offsetTop;
}

  render() {
    return <nav id='navbar' className='navbar'>
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
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#experience'>Experience</a>
            </li>
            <li>
              <a href='#education'>Education</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#skills'>Skills</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  }
}
