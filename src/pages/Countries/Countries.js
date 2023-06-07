import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';

export default function Countries() {
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

    return (
        <>
        <div>
            {countries.map((country) => (
                <Card key={country.name.common} {...country} />
            ))}
        </div>
        </>
    );
}