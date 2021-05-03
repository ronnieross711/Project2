import React, { useState } from 'react';
// import About from './About';
// import Nav from './Nav';
// import Searchbar from './Searchbar';
import Content from './Content';


function Home(props) {

    
    

    return (
        <div className="Main-container">
            
            <div className="paragraph">
            <p>Use the search bar below to search for holidays. You can search by day, month, location, and type of holiday.</p>
            </div>
           
                
                  
        
            <Content />
            
        </div>
    );
}



export default Home;