import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

export default function NavBar() {
    return (
        <nav className='nav'>
            <Link to='/'>Home</Link> &nbsp;
            <Link to='/countries'>Countries</Link>
            <Link to='/mytrips'>My Trips</Link>
        </nav>
    );
}
