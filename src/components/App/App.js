import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home'
import Countries from '../../pages/Countries/Countries'
import MyTrips from '../../pages/MyTrips/MyTrips'
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/countries' element={<Countries />} />
        <Route path='/mytrips' element={<MyTrips />} />
        {/* TODO: create error page & route here! */}
      </Routes>
    </BrowserRouter>
  );
}
