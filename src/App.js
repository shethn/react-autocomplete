import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
