import React from 'react'
import styles from './Aside.module.css'
import { useAuth0 } from "@auth0/auth0-react";

const Aside = () => {

    const { loginWithRedirect, logout, isAuthenticated, user} = useAuth0();

  return (
    <>

    <aside>

        <h3>Menu</h3>


        <div className={styles.sidebar}>

            <h4>Tasks</h4>

           <li><img src="images/icons/upcoming-icon.png" alt="" /> <h4>Upcoming </h4></li> 
           <li><img src="images/icons/calendar-icon.png" alt="" /> <h4>Calender </h4></li> 
           <li><img src="images/icons/meeting-icon.png" alt="" /> <h4>Meetings </h4></li> 
           <li><img src="images/icons/today-icon.png" alt="" /> <h4>Today </h4></li> 
        </div>

        <hr />
        <div className={styles.sidebar}>

            <h4>Lists</h4>

           <li><img src="images/icons/personal-icon.png" alt="" /> <h4>Personal </h4></li> 
           <li><img src="images/icons/work-icon.png" alt="" /> <h4>Work </h4></li> 
           <li><img src="images/icons/education-icon.png" alt="" /> <h4>Education </h4></li> 
        </div>
        <hr />
        {
        isAuthenticated &&
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Sign out</button>
        }



    </aside>
      
    </>
  )
}

export default Aside
