import React, { Component } from 'react';
import './App.scss'
import Header from "./components/Header";
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className={'layout'}>
          <Header/>
          {/*<BehindTheScenes/>*/}
          <Footer/>
      </div>
    );
  }
}

export default App;
