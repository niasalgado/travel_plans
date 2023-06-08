import React, { useState } from 'react';
import './card.css';

export default function Card( {flags, name} ) {
  
  const [planCountry, setPlanCountry] = useState();
  const handleClick = () => setPlanCountry();

  return (
    <div className="cardDet">
      <img className='flag-img' src={flags.svg} alt="{name.common} flag"></img>
      <h2>{name.common}</h2>
      {/* TODO: add functionality to plan and visited buttons */}

      <button onClick={handleClick}>Add to Plan</button>

    </div>
  )
}
