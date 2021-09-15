import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite:(favouriteMeetup)=>{},//these three don't do anything but good for IDE autocomplete
  removeFavourite:(meetupId)=>{},
  itemIsFavourite:(meetupId)=>{},

});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  const addFavouriteHandler = (favouriteMeetup) => {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteMeetup);
    });
  };


  const removeFavouriteHandler=(meetupId)=>{
    setUserFavourites((prevUserFavourites) => {
        return prevUserFavourites.filter(meetup=>meetup.id!==meetupId);
      });
  }

  const itemIsFavouriteHandler = (meetupId)=>{
      return userFavourites.some(meetup=>meetup.id===meetupId);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite:addFavouriteHandler,
    removeFavourite:removeFavouriteHandler,
    itemIsFavourite:itemIsFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;