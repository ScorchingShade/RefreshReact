import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FavouritesContext from '../../store/favourites-context';
import classes from './MainNavigation.module.css'

function MainNavigation() {

    const favouritesCtx=useContext(FavouritesContext);
    
    return (
        <header className={classes.header}>
            <div className={classes.logo}> <Link to="/">React Meetups</Link></div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">all meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">new meetup</Link>
                    </li>
                    <li>
                        <Link to="/favourites">favourites
                            <span className={classes.badge}>{favouritesCtx.totalFavourites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}

export default MainNavigation
