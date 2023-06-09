import React, { useEffect, useState } from 'react';
import CountryCard from '../../components/CountryCard/CountryCard';
import NavBar from '../../components/NavBar/NavBar';
import './countries.css';

export default function Countries( {setPlanCountry, planCountry, visitedCountry, setVisitedCountry} ) {
    const [countries, setCountries] = useState([]);
    const fetchCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            setCountries(data);
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => { 
        fetchCountries();
    }, []);

    const [search, setSearch] = useState('');
    const searchCountries = async () => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${search}`)
            const data = await response.json();
            setCountries(data)
        } catch (error) {
            console.log(error)
        }
    }
    function handleSearch(evt) {
        evt.preventDefault()
        searchCountries()
    }

    return (
        <>
        <NavBar />
        <div id='searchContainer'>
            <form onSubmit={handleSearch}>
                <input 
                    type='text' 
                    id='searchbar' 
                    value={search} 
                    onChange={(evt) => setSearch(evt.target.value)}
                    placeholder='Search for a country' 
                    required>    
                </input>
                <button type='submit' value='search' className='trips-button'>Search</button>
            </form>
        </div>
        <div className="cardGrid">
            {countries.map((country) => (
                <CountryCard key={country.name.common} 
                    {...country} 
                    setPlanCountry={setPlanCountry} 
                    planCountry={planCountry} 
                    setVisitedCountry={setVisitedCountry} 
                    visitedCountry={visitedCountry} 
                />
            ))}
        </div>
        </>
    );
}