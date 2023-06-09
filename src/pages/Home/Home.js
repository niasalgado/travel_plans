import React from 'react'
// import { useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'

export default function Home() {

  // function handleResponse(response) {
  //   console.log('JWT ID token: ' + response.credential)
  // }
  
  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     client_id: "330069934010-tk5gg6qmrade1pkh5uo79koj6u3pk5th.apps.googleusercontent.com",
  //     callback: handleResponse
  //   })

  //   google.accounts.id.renderButton(
  //     document.getElementById('signInDiv'),
  //   );
  // }, []);

  return (
    <>
        <NavBar />
        <div id='signInDiv'></div>
        <h1>Travel Plans</h1>
    </>
  )
}
