import React from "react";
// import styled from "styled-components";
// import Header from "./screens/Header.js.js";
// import WelcomePage from "./screens/WelcomePage";
import { Switch, Route } from "react-router-dom";
import HomePage from "./screens/home/HomePage.js";
import Navigation from "./screens/navigation/Navigation.js";
import CharactersPage from "./screens/characters/Characters.js";

export default function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/characters" component={CharactersPage} />
      </Switch>
    </>
  );
}


// const AppWrapper = styled.div`
//   width: 100%;
// `;