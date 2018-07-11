import React, { Component } from 'react';
import './App.scss'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from './About'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import BehindTheScenes from './components/BehindTheScenes'

class App extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <Header/>
          <About/>
          <BehindTheScenes/>
          {/* <Experience/> */}
          {/* <Education/> */}
          <Projects/>
          <Skills/>
          <Contact/>
      </div>
    );
  }
}

export default App;
