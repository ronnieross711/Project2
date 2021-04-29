import React from 'react';
import { Link } from 'react-router-dom';
// import Content from './Content';

function Nav(props) {
    return (
        <div className="NavBar">
          <Link to="/">
              <button className="button hoverBlue homeButton">
                  <h2>Home</h2>
               </button>
            </Link>
          <Link to="/About">
            <button className="button hoverRed aboutButton">
                <h2>About</h2>
                </button>
            </Link>
            {/* <Content /> */}
          

        </div>
    );
}

export default Nav;