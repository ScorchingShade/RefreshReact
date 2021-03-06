import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
