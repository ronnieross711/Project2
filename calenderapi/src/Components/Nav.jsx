import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <div className="NavBar">
          <Link to ="/">Home </Link>
          <Link to ="appcontent">Content</Link>  
        </div>
    );
}

export default Nav;