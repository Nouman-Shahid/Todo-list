import React from 'react'
import styles from './Nav.module.css'
import { useAuth0 } from "@auth0/auth0-react";


const Nav = () => {

  const { loginWithRedirect, logout, isAuthenticated, user} = useAuth0();

  return (
    <header>

      <div className={styles.logo}>

        <a href=""><img src="images/favicon/logo.png" alt="logo" /></a>

        <h3>Tick-Task</h3>

      </div>


      <ul>
        {
          isAuthenticated &&
          <li><a href="">Home</a></li>
        }

        <li><a href="">About</a></li>
        <li><a href="">Help</a></li>
        <li><a href="">Contact</a></li>
        {isAuthenticated ? (
          <p> </p>
          ) :
          (
            <li><button onClick={() => loginWithRedirect()}>Sign in</button> </li>
            )
          }

          {
            isAuthenticated &&
            <li><img src={user.picture} alt={user.name} /> </li>
          }
      </ul>


    </header>
  )
}

export default Nav
