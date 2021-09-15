import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation() {
    
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">all meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">new meetup</Link>
                    </li>
                    <li>
                        <Link to="/favourites">favourites</Link>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}

export default MainNavigation
