import React from 'react'

var navbar
var sticky
var sections = []

window.scrollTo({behavior: 'smooth'})
export default class Navbar extends React.Component {

  constructor() {
    super()
    window.onscroll = () => {
      this.onScroll()
    }
  }

  onScroll() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("navbar-sticky")
    } else {
      navbar.classList.remove("navbar-sticky");
    }

    sections = document.getElementsByTagName('section')
    for (var i = 0; i < sections.length; i++) {
      var id = sections[i].id;
      var top = sections[i].offsetTop - navbar.offsetTop;
      var bottom = top + sections[i].offsetHeight;

      if (window.scrollY >= top && window.scrollY <= bottom) {
        navbar.querySelectorAll('a').forEach((node) => {
          node.classList.remove('active')
        })

        var selected = navbar.querySelectorAll('a[href*="#' + id + '"]').forEach((node) => {
          node.classList.add('active')
        })
      }
    }
  }

  showMobileMenu=()=>{
    var overlay = document.getElementById('overlay')
    overlay.className === 'overlay' ? overlay.classList.add('hidden') : overlay.classList.remove('hidden')
    var navbar = document.getElementById('nav-mobile');
    navbar.className === 'nav-mobile' ? navbar.className += ' open' : navbar.className = 'nav-mobile'
  }
  componentDidMount() {
    navbar = document.getElementById("navbar");

    sticky = navbar.offsetTop;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
  }

  renderNavList = ()=>{
    return <ul className="nav" id='nav'>
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
      <a className='icon' onClick={this.showMobileMenu}>
        <i class="fa fa-bars"></i>
      </a>
    </ul>
  }

  render() {
    return <div>
      <div id='nav-mobile' className='nav-mobile'>
        <div className='navbar-header'>
          <a href='/#'>
            <div className='logo'>
              Juan
            </div>
          </a>
          <ul className="nav" id='nav'>
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
      <div id='overlay' className='overlay hidden'></div>
      <nav id='navbar' className='navbar'>
        <div className='container'>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <div className='navbar-header'>
            <a href='/#'>
              <div className='logo'>
                Juan
              </div>
            </a>
          </div>
          <div className='collapse navbar-collapse'>
            {this.renderNavList()}
          </div>
        </div>
      </nav>
    </div>

  }
}
