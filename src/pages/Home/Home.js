import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import NavBar from '../../components/NavBar/NavBar'
import { Link } from 'react-router-dom'
import { Pagination}  from "swiper";
import './home.css'
import "swiper/css";
import "swiper/css/pagination";


export default function Home() {
    const [homeCountries, setHomeCountries] = useState([]);
    const fetchHomeCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            let rand = Math.floor(Math.random() * 180);
            setHomeCountries(data.slice(rand, (rand + 10)));
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => { 
        fetchHomeCountries();
    }, []);

  return (
    <>
        <NavBar />
        <div id='title'>
          <h1>Travel Plans</h1>
        </div>
        <div id='app'>
          <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
            {homeCountries.map((country) => (
              <SwiperSlide>
                <Link to={`/${country.name.common}`}>
                  <img className='flag-img' src={country.flags.svg} alt={country.flags.alt}></img>
                  <h2>{country.name.common}</h2>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

    </>
  )
}
