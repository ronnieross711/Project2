import React, { useState } from 'react';
import { Route } from 'react-router-dom';
// import ContentContainer from './ContentContainer';
import Home from './Home'
import Searchbar from './Searchbar';
import About from './About';


function Main(props) {

    const [searchString, setSearchString] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        console.log('e.target.value')
    } 
    
    const handleChange = (ev) => {
        ev.preventDefault()
       setSearchString(searchString)
       console.log("working", searchString)
    }
    

    return (
        <div className="Main-container">
            
          
            <div className="Main-searchbar">
            <Searchbar searchString={searchString}
                        handleClick={handleClick}
                        handleChange={handleChange}
                        setSearchString={setSearchString}/>
            </div>
            <About />
            
            <div className="Main">
            <Route exact path="/" component={Home}/>
            {/* <Route exact path="/appcontent" render={ContentContainer}/> */}
            </div>
        </div>
    );
}

export default Main;