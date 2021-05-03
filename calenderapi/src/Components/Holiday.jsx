import React, { useState, useEffect} from 'react';

function Holiday({ match }) {
    const [calendar, setCalendar] = useState(null)

    useEffect(() => {
        fetch("https://calendarific.com/api/v2/holidays?api_key=8c5d4ff71a10949e1ed38e697ff19bff2b603915&country=US&year=2019")
        .then((result) => result.json())
        .then((result) => {
            setCalendar(result.response.holidays);
            // console.log( result.response.holidays)
            // console.log(calendar);
        })
        .catch(console.error)
    
    }, []);

    return (
        calendar &&
        <div className="answers">
            { calendar.filter(holiday => holiday.name === match.params.id).map(
                holiday => (
                    <div> 
                        <h1>{ holiday.name }</h1>
                        <p>{ holiday.description }</p>
                    </div>

                )
            ) }

        </div>
    );
}

export default Holiday;