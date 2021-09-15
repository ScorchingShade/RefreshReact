import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
});

function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState(initialState);

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
      return userFavourites.some(meetup=>meetup.id===meetupid);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
  };

  return (
    <FavouritesContext.Provider value={context}>
      ;{props.children}
    </FavouritesContext.Provider>
  );
}
