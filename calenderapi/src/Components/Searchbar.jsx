import React, { useState } from 'react';



function Searchbar(handleChange, handleClick, searchString) {
console.log(searchString)

    return (
        <div className="searchbar">
            <form onClick={handleClick}>
                <input type="text"
                        placeholder="search holidays!"
                        name="searchString"
                        // onChange={handleChange}
                        // value={searchString}
                >
                
                </input>
                
                {/* <button type="submit">
                    Search
                </button> */}
            </form>
                  
        </div>
    );
}

export default Searchbar;