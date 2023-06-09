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

    const [currency, setCurrency] = useState(null);

    useEffect(() => {
        const fetchCurrency = async() => {
            try {
                const response = await fetch('')
                const data = await response.json()
                setCurrency(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCurrency();
    }, []);

  return (
    <>
        <NavBar />
        <div>
            {country.map((c) => (
                <div key={c.name}>
                    <div id='countryFlagImg'>
                        <img src={c.flags.svg} alt={c.flags.alt} />
                    </div>

                    <div id='countryDetails'>
                        <h1>{c.name.common}</h1>
                        <ul>
                            <li>Capital: {c.capital}, {c.name.common}</li>
                            <li>Population: {c.population.toLocaleString()}</li>
                            <li>Continent: {c.continents}</li>
                            <li>Currency: </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}
