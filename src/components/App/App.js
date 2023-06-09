import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Countries from '../../pages/Countries/Countries';
import Country from '../../pages/Country/Country';
import MyTrips from '../../pages/MyTrips/MyTrips';
import './App.css';

export default function App() {

  const [planCountry, setPlanCountry] = useState([]);

  function handleResponse(response)
  
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: '330069934010-tk5gg6qmrade1pkh5uo79koj6u3pk5th.apps.googleusercontent.com',
      callback: handleResponse
    });

    }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:name' element={<Country />}></Route>
        <Route path='/countries' element={
          <Countries 
          setPlanCountry={setPlanCountry}
          planCountry={planCountry} 
          /> 
          } />
        <Route path='/mytrips' element={
          <MyTrips 
          setPlanCountry={setPlanCountry} 
          planCountry={planCountry} 
          />
          } />
        {/* TODO: create error page & route here! */}
      </Routes>
    </BrowserRouter>
  );
}
