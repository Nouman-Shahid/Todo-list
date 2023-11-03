import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import styles from './Welcome.module.css'
import Nav from '../Navbar/Nav';



const Welcome = () => {
  
  const { loginWithRedirect } = useAuth0();


  return (
    <>

    <Nav />

      <section className={styles.welcome}>

      <h1>Organize your work, with <span>Tick-Task</span></h1>

      <h3>Become focused, organized, and calm with Tick-Task. The fastest way to get tasks out of your head.</h3>

      <a href=""><button onClick={() => loginWithRedirect()}>Get Started</button></a>

      </section>

    </>
  )
}

export default Welcome
