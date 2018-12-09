import React from "react";

var navbar;
var sticky;
var sections = [];
export default class Navbar extends React.Component {
  constructor() {
    super();
    window.onscroll = () => {
      this.onScroll();
    };
  }

  onScroll() {
    console.log(window.scrollY);

    if (window.pageYOffset > sticky) {
      navbar.classList.add("navbar-sticky");
    } else {
      navbar.classList.remove("navbar-sticky");
    }

    sections = document.getElementsByTagName("section");
    console.log("sections", sections);
    for (var i = 0; i < sections.length; i++) {
      var id = sections[i].id;
      var top = sections[i].offsetTop - navbar.offsetTop;
      var bottom = top + sections[i].offsetHeight;

      if (window.scrollY >= top && window.scrollY <= bottom) {
        navbar.querySelectorAll("a").forEach(node => {
          node.classList.remove("active");
        });

        var selected = navbar
          .querySelectorAll('a[href*="#' + id + '"]')
          .forEach(node => {
            node.classList.add("active");
            console.log("node", node);
          });
        console.log("selected", selected);
      }
      console.log(sections[i].offsetTop);
    }
  }
  componentDidMount() {
    navbar = document.getElementById("navbar");

    // sticky = navbar.offsetTop;
  }

  render() {
    return (
      <nav id="navbar" className="navbar">
        <div className="container">
          <div className="navbar-header">
            <a href="/">
              <div className="logo">Juan</div>
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
