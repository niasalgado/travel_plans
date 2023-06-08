import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home'
import Countries from '../../pages/Countries/Countries'
import MyTrips from '../../pages/MyTrips/MyTrips'
import './App.css';

export default function App() {

  const [planCountry, setPlanCountry] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/countries' element={
          <Countries setPlanCountry={setPlanCountry} planCountry={planCountry} /> } 
          />
        <Route path='/mytrips' element={<MyTrips />} />
        {/* TODO: create error page & route here! */}
      </Routes>
    </BrowserRouter>
  );
}
