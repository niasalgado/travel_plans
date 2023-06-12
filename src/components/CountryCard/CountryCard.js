import React from 'react';
import { Link } from 'react-router-dom';
import './countrycard.css';

export default function CountryCard({flags, name, capital, setPlanCountry, planCountry}) {
  
  const handleClick = (countryName) => setPlanCountry([...planCountry, countryName]);

  return (
    <div className="countryCard">
      <Link to={`/${name.common}`}>
          <img className='flag-img' src={flags.svg} alt={flags.alt}></img>
          <h2>{name.common}</h2>
      </Link>
      {/* TODO: add functionality to visited buttons */}
      <button onClick={() => handleClick(name.common)}>Add to Plan</button>
      <button>Already Visited</button>
    </div>
  )
}
