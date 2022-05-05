import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./screens/home/HomePage.js";
import Navigation from "./screens/navigation/Navigation.js";
import CharactersPage from "./screens/characters/Characters.js";
import LocationsPage from "./screens/locations/Locations.js";
import EpisodesPage from "./screens/episodes/Episodes.js";

export default function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/characters" component={CharactersPage} />
        <Route path="/locations" component={LocationsPage} />
        <Route path="/episodes" component={EpisodesPage} />
      </Switch>
    </>
  );
}

