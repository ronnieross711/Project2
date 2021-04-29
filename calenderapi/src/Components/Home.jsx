import React, { useState } from 'react';
// import About from './About';
// import Nav from './Nav';
// import Searchbar from './Searchbar';
import Content from './Content';


function Home(props) {

    
    

    return (
        <div className="Main-container">
            
            
            <h1>Use the search bar below to search for holidays. You can search by day, month, location, and type of holiday.</h1>
           
                
                  
        
            <Content />
            
            {/* <div className="Main-searchbar">
            <Searchbar searchString={searchString}
                        handleClick={handleClick}
                        handleChange={handleChange}
                        setSearchString={setSearchString}/>
            </div>   */}
        </div>
    );
}



export default Home;