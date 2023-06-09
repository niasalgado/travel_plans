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


    const [exchangeRate, setexchangeRate] = useState(1);
    console.log("exchange rate: " , exchangeRate)

    useEffect(() => {
        const fetchRate = async() => {
            try {
                // TODO: reformat link to populate with country code from country API below
                const url = 'https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=CAD&amount=1'; 
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '81c51a9c6amshec235b1971e0be0p17dcc6jsn6d8c8cc32c53',
                        'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
                    }
                };
                const response = await fetch(url, options);
	            const data = await response.json();
                // TODO: extract object within object of rates from data returned
                setexchangeRate(data.rates)
                // TODO: remove console log below
	            console.log(data.rates);
            } catch (error) {
                console.log(error)
            }
        }
        fetchRate();
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
                            <li>Exchange Rate from $1 USD = </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}
