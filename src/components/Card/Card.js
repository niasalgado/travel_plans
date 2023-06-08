import React from 'react';
import './card.css';

export default function Card({flags, name, capital, setPlanCountry, planCountry}) {
  
  const handleClick = (countryName) => setPlanCountry([...planCountry, countryName]);

  return (
    <Link to={`/${country}`}>
      <div className="countryCard">
        <img className='flag-img' src={flags.svg} alt={flags.alt}></img>
        <h2>{name.common}</h2>

        <ul>
          <li>capital: {capital}</li>
          <li></li>
          <li></li>
        </ul>

        {/* TODO: add functionality to visited buttons */}
        <button onClick={() => handleClick(name.common)}>Add to Plan</button>
        <button>Already Visited</button>
      </div>
    </Link>
  )
}
