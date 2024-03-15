import React, { useState, useEffect} from 'react'

// styles
import './TripList.css'

export default function TripList() {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/trips')
        .then(res => res.json())
        .then(data => setTrips(data))
        .catch(e => console.log(e))    
    }, [])

  return (
    <div className='trip-list'>
      <h1>Trip List Right Here c:</h1> 
      <ul>
        {trips.map( trip => <li key={trip.id}>{trip.title} <p> {trip.price}</p> </li>   )}
      </ul>
    </div>
  )
}
