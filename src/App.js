import React, { Component } from 'react';
import './App.scss'
import Header from "./components/Header";
import Footer from './components/Footer'
import { ParallaxProvider } from "react-scroll-parallax";
import ProjectGrid from "./components/ProjectGrid";

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
      <div className={'layout'}>
          <Header/>
          <ProjectGrid projects={require('./data/projects')}/>
          <Footer/>
      </div>
      </ParallaxProvider>
    );
  }
}

export default App;
