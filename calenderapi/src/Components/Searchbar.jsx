import React, { useState } from 'react';



function Searchbar(handleChange, handleClick, searchString) {


    return (
        <div className="searchbar">
            <form onClick={handleClick}>
                <input type="text"
                        placeholder="search holidays!"
                        onChange={handleChange}
                        value={searchString}
                >
                
                </input>
                
                <button type="submit">
                    Click ME!
                </button>
            </form>
            
        </div>
    );
}

export default Searchbar;