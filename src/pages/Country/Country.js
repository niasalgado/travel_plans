import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

export default function Country() {
    const [country, setCountry] = useState([]);

    const [countryCurrency, setCountryCurrency] = useState('');
    console.log('currrrrr: ', countryCurrency)

    const [currSymbol, setcurrSymbol] = useState('');
    console.log('currr SYMBOL: ', currSymbol)

    const {name} = useParams();

    
    useEffect(() => {
        const fetchCountry = async() => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)

                const data = await response.json()
                setCountry(data)

                const currency = Object.entries(data[0].currencies)[0][0];
                setCountryCurrency(currency)

                const symbol = Object.entries(country[0].currencies)[0][1].symbol;
                setcurrSymbol(symbol)
                
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
                const url = `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=${countryCurrency}&amount=1`; 
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '81c51a9c6amshec235b1971e0be0p17dcc6jsn6d8c8cc32c53',
                        'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
                    }
                };
                const response = await fetch(url, options);
	            const data = await response.json();

                // TODO: extract rate number within object of rates from data returned
                let rate = Object.entries(data.rates)[0][1].rate
                console.log('RATE: ', rate)
                setexchangeRate(rate)
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
                            <li>Exchange Rate from $1 USD = {currSymbol} {exchangeRate} {countryCurrency}</li>
                        </ul>
                    </div>



                </div>
            ))}
        </div>
    </>
  )
}
