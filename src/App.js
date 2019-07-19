import React, { Component } from 'react';
import './App.scss'
import Greeting from "./components/Greeting";
import Footer from './components/Footer/Footer'
import { ParallaxProvider } from "react-scroll-parallax";
import ProjectGrid from "./components/ProjectGrid";

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
      <div className={'layout'}>
          <Greeting/>
          <ProjectGrid projects={require('./data/projects')}/>
          <Footer/>
      </div>
      </ParallaxProvider>
    );
  }
}

export default App;
