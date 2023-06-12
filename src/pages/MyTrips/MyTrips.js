import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './mytrips.css'

export default function MyTrips( {planCountry, visitedCountry} ) {
  return (
    <>
    <NavBar />
      <div className='listsContainer'>
        <div className="trips-list">
        <h3>Planning To Visit</h3>
          {planCountry.map((country, index) => {
            return <li key={index}>{country}</li>
          })}
        </div>

        <div className="trips-list">
        <h3>Already Visited</h3>
          {visitedCountry.map((country, index) => {
            return <li key={index}>{country}</li>
          })}
        </div>
      </div>
    </>
  )
}
