import React from 'react';
import { Link } from 'react-router-dom';
import './countrycard.css';

export default function CountryCard({flags, name, setPlanCountry, planCountry, visitedCountry, setVisitedCountry}) {
  
  const handlePlanClick = (countryName) => setPlanCountry([...planCountry, countryName]);
  const handleVisitedClick = (countryName) => setVisitedCountry([...visitedCountry, countryName]);

  return (
    <div className="countryCard">
      <Link to={`/${name.common}`}>
          <img className='flag-img' src={flags.svg} alt={flags.alt}></img>
          <h2>{name.common}</h2>
      </Link>
      <div id='trips-button-container'>
        <button onClick={() => handlePlanClick(name.common)} className='trips-button'>Plan to Visit</button>
        <button onClick={() => handleVisitedClick(name.common)} className='trips-button'>Already Visited</button>
      </div>
    </div>
  )
}
