import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

export default function Country() {
    const [country, setCountry] = useState([]);
    const {name} = useParams();

    useEffect(() => {
        const fetchCountry = async() => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
                const data = await response.json()
                setCountry(data)
            } catch (error) {
                console.log(error)
            }
        }
    fetchCountry();
    }, [name]);

  return (
    <>
        <NavBar />
        <div>
            {country.map((c) => (
                <div key={c.name}>
                    <img src={c.flags.svg} alt={c.flags.alt} />
                    <ul>
                        <li><h1>{c.name.common}</h1></li>
                        <li>Capital: {c.capital}</li>
                        <li>Population: {c.population}</li>
                        <li>Continent: {c.continents}</li>
                    </ul>
                </div>
            ))}
        </div>
    </>
  )
}
