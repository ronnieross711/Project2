import React, { useState } from 'react';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Searchbar from './Components/Searchbar';
import Content from './Components/Content'

import './App.css';




function App() {
  return (
    <div className="App">
      <div className="App-Header">
        <Header />
      </div>
      
      <div className="App-Main">
        <Main/>
      </div>

      <div className="App-Nav">
        <Nav/>
      </div>

      <div className="App-Searchbar">
        <Searchbar />
      </div>

      <div className="App-Content">
        <Content />
      </div>

      <div className="App-Footer">
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
