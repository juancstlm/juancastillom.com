import './App.scss'
import Greeting from "./components/Greeting";
import Footer from './components/Footer/Footer'
import { ParallaxProvider } from "react-scroll-parallax";
import ProjectGrid from "./components/ProjectGrid";
import React from "react";

function App() {
  return (
    <ParallaxProvider scrollAxis={'vertical'}>
      <div className={'layout'}>
        <Greeting/>
        <ProjectGrid projects={require('./data/projects')}/>
        <Footer/>
      </div>
    </ParallaxProvider>
  );
}

export default App;
