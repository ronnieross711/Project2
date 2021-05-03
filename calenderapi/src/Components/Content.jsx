import React, {useState, useEffect} from 'react';
import {Link } from 'react-router-dom'

function Content(props) {
    const [calendar, setCalendar] = useState([])
    const [searchString, setSearchString] = useState('')
    

    const handleClick = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    } 
    
    const handleChange = (ev) => {
        // ev.preventDefault()
       setSearchString(ev.target.value)
       
    }

    
    useEffect(() => {
        fetch("https://calendarific.com/api/v2/holidays?api_key=8c5d4ff71a10949e1ed38e697ff19bff2b603915&country=US&year=2019")
        .then((result) => result.json())
        .then((result) => {
            setCalendar(result.response.holidays);
                        
        })
        .catch(console.error)
    
    }, []);


    return (
      <div>
        <div className="Main-container">
          <span className="searchbar">
            <form onClick={handleClick}>
              <input
                type="text"
                placeholder="search holidays!"
                name="searchString"
                onChange={handleChange}
              ></input>

              <button type="submit">Search</button>
            </form>
            
          </span>

          <section className="container">
            {calendar.length > 0 ? (
              calendar.map((holidays, i) => (
                (!searchString || holidays.name.toLowerCase().includes(searchString.toLowerCase()) ? 
                <Link to={`/holiday/${holidays.name}`} key={i}>
                    <h3>{holidays.name}</h3>
                </Link>
                : '')
              ))
            ) : (
              <p>Information loading</p>
            )}
          </section>
        </div>
      </div>
    );
  }

export default Content;