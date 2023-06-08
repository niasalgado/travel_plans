import React, { useEffect, useState } from 'react';
import CountryCard from '../../components/CountryCard/CountryCard';
import NavBar from '../../components/NavBar/NavBar';

import './countries.css';

export default function Countries( {setPlanCountry, planCountry} ) {
    const [countries, setCountries] = useState([]);
    const fetchCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();

            setCountries(data.slice(0,10));
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => { 
        fetchCountries();
    }, []);

    return (
        <>
        <NavBar />
        <div>Countries</div>
        <div className="cardGrid">
            {countries.map((country) => (
                <CountryCard key={country.name.common} {...country} setPlanCountry={setPlanCountry} planCountry={planCountry} />
            ))}
        </div>
        </>
    );
}