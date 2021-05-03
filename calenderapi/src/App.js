import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Content from './Components/Content';
import Holiday from './Components/Holiday';
import './App.css';





function App() {

  
  return (
    <div className="App">


<div className="app-Navbar">
                <Nav />
            </div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Content" component={Content}/>
            <Route exact path="/Holiday/:id" render={ routerprops => {
              return <Holiday match={routerprops.match} />
            }}/>      
      
    </div>
  );
}

export default App;
