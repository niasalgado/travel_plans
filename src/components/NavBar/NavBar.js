import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

export default function NavBar() {
    const google = window.google;

    function handleResponse(response) {
        console.log('JWT ID token: ' + response.credential);
    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "330069934010-tk5gg6qmrade1pkh5uo79koj6u3pk5th.apps.googleusercontent.com",
            callback: handleResponse
        })

        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            { theme: "outline", size: "small" }
        );
    }, []);
    
    return (
        <nav className='nav'>
            <Link to='/'>Home</Link> &nbsp;
            <Link to='/countries'>Countries</Link>
            <Link to='/mytrips'>My Trips</Link>
            <div id='signInDiv'></div>
        </nav>
    );
}
