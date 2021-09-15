import { Route,Switch } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <MainNavigation/>
    <Switch>
      <Route exact path="/">
        <AllMeetups />
      </Route>

      <Route exact path="/new-meetup">
        <NewMeetup />
      </Route>


      <Route exact path="/favourites">
        <Favourites />
      </Route>
    </Switch>
    </div>


  );
}

export default App;
