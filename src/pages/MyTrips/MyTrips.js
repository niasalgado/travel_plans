import React from 'react'
import './mytrips.css'
import NavBar from '../../components/NavBar/NavBar'

export default function MyTrips( {setPlanCountry, planCountry, name} ) {
  return (
    <>
    <NavBar />
    <div>My Trips</div>
    <div className='listsContainer'>
        <h3>Planning To Visit:</h3>

        <div className="planList">
            {planCountry.map((country) => {
                return <li>{country}</li>
            })}
        </div>

        
        <h3>Already Visited:</h3>
        <div>
        </div>

    </div>
    </>
  )
}
