import React, { Component } from 'react';
import './App.scss'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from './About'

class App extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <Header/>
          <About/>
      </div>
    );
  }
}

export default App;
