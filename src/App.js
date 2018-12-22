import React, { Component } from 'react';
import './App.scss'
import Header from "./components/Header";
import Footer from './components/Footer'
import Column from "./components/Column";
import { ParallaxProvider } from "react-scroll-parallax";

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
      <div className={'layout'}>
          <Header/>
          <Column/>
          <Footer/>
      </div>
      </ParallaxProvider>
    );
  }
}

export default App;
