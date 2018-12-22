import React, { Component } from 'react';
import './App.scss'
import Header from "./components/Header";
import Footer from './components/Footer'
import Column from "./components/Column";

class App extends Component {
  render() {
    return (
      <div className={'layout'}>
          <Header/>
          <Column/>
          <Footer/>
      </div>
    );
  }
}

export default App;
