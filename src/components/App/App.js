import './App.css';
import Countries from '../../pages/Countries/Countries'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Countries />}></Route>
        {/* TODO: create error page & route here! */}
      </Routes>
    </BrowserRouter>
  );
}
