import React from 'react'
import './card.css';

export default function Card( {flags, name} ) {
  return (
    <div className="cardDet">
      <img className='flag-img' src={flags.svg} alt="{name.common} flag"></img>
      <h2>{name.common}</h2>
      {/* TODO: make these buttons */}
      <p>[ Visited? ]</p>
      <p>[ Plan to Visit ]</p>
    </div>
  )
}
