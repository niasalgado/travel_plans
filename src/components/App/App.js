import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Countries from '../../pages/Countries/Countries';
import Country from '../../pages/Country/Country';
import MyTrips from '../../pages/MyTrips/MyTrips';
import './App.css';

export default function App() {

  const [planCountry, setPlanCountry] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:name' element={<Country />}></Route>
        <Route path='/countries' element={
          <Countries 
          planCountry={planCountry}
          setPlanCountry={setPlanCountry}
          visitedCountry={visitedCountry}  
          setVisitedCountry={setVisitedCountry}
          /> 
          } />
        <Route path='/mytrips' element={
          <MyTrips 
          planCountry={planCountry} 
          setPlanCountry={setPlanCountry}
          visitedCountry={visitedCountry}  
          setVisitedCountry={setVisitedCountry}
          />
          } />
        {/* TODO: create error page & route here! */}
      </Routes>
    </BrowserRouter>
  );
}
