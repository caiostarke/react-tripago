import React, { useState, useEffect, useCallback} from 'react'
import useFetch from '../hooks/useFetch'
// styles
import './TripList.css'

export default function TripList() {
    const [url, setUrl] = useState('http://localhost:3000/trips')
    const { data: trips } = useFetch(url)

  return (
    <div className='trip-list'>
      <h1>Trip List Right Here c:</h1> 
      <ul>
        {trips && trips.map( trip => <li key={trip.id}>{trip.title} <p> {trip.price}</p> </li>   )}
      </ul>
      <div className="filters">
        <button onClick={() => setUrl('http://localhost:3000/trips?location=Europe')}>
            European Trips
        </button>
        <button onClick={() => setUrl('http://localhost:3000/trips')}>
            All Trips
        </button>
      </div>
    </div>
  )
}
 