import React from 'react';
import { Link } from 'react-router-dom';
// import Content from './Content';

function Nav(props) {
    return (
        <div className="NavBar">
          <div className="home">
          <Link to="/">
              <button className="button hoverBlue homeButton">
                  <h2>Home</h2>
               </button>
            </Link>
            </div>
          

        </div>
    );
}

export default Nav;