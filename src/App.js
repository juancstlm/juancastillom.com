import React, { Component } from 'react';
import './App.scss'
import Header from "./components/Header";
import About from './About'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <About/>
          {/*<BehindTheScenes/>*/}
          {/* <Education/> */}
          {/*<Projects/>*/}
          {/*<Skills/>*/}
          {/*<Contact/>*/}
          <Footer/>
      </div>
    );
  }
}

export default App;
