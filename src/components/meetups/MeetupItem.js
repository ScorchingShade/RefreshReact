import React, { useContext } from 'react'
import FavouritesContext from '../../store/favourites-context';
import Card from '../ui/Card';

import classes from './MeetupItem.module.css';



function MeetupItem(props) {

    const favouritesCtx=useContext(FavouritesContext);

    const itemFavourite= favouritesCtx.itemIsFavourite(props.id);

    function toggleFavoriteStatusHandler(){
        if(itemFavourite){
            favouritesCtx.removeFavourite(props.id);
        }
        else{
            favouritesCtx.addFavourite({
                id:props.id,
                title:props.title,
                description:props.description,
                image:props.image,
                address:props.address
            })
        }
    }

    const {image,title,description,address} = props

    return (
       <li className={classes.item}>
           <Card>
           <div className={classes.image}>
               <img src={image} alt={title}/>
           </div>
           <div className={classes.content}>
               <h3>{title}</h3>
               <address>{address}</address>
               <p>{description}</p>
           </div>
           <div className={classes.actions}>
               <button onClick={toggleFavoriteStatusHandler}>{itemFavourite?'Remove From Favourites':"Add To Favourites"}</button>
           </div>
           </Card>
       </li>
    )
}

export default MeetupItem
