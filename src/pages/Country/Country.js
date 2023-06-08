import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

export default function Country() {
    const [country, setCountry] = useState([]);
    const {name} = useParams();

    useEffect(() => {
        const fetchCountry = async() => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/name/' + {name})
                const data = await response.json()
                setCountry(data)
            } catch (error) {
                console.log(error)
            }
        }
    }, [name]);

  return (
    <>
        <NavBar />
        <div>
            {country.map((c) => (
                <h1>{c.name.common}</h1>
            ))}
        </div>
    </>
  )
}
