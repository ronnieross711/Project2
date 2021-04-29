import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Content from './Components/Content';
// import Searchbar from './Components/Searchbar';
import About from './Components/About';
import './App.css';





function App() {

  // const [searchString, setSearchString] = useState('')

  //   const handleClick = (e) => {
  //       e.preventDefault()
  //       console.log('e.target.value')
  //   } 
    
  //   const handleChange = (ev) => {
  //       ev.preventDefault()
  //      setSearchString(searchString)
  //      console.log("working", searchString)
  //   }

  return (
    <div className="App">


<div className="app-Navbar">
                <Nav />
            </div>
             <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/Content" component={Content}/>

            {/* <div className="Main-searchbar">
            <Searchbar searchString={searchString}
                        handleClick={handleClick}
                        handleChange={handleChange}
                        setSearchString={setSearchString}/>
            </div>   */}
     
        {/* <Header />  
     
        <Home/>
            
        <Nav/>    
              
        <About />
        
        <Footer/> */}
      
    </div>
  );
}

export default App;
