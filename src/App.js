import React from "react";
// import styled from "styled-components";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage.js";
import Navigation from "./components/navigation/Navigation.js";

export default function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Header />
        <WelcomePage />
      </Switch>
</>
  );
}


// const AppWrapper = styled.div`
//   width: 100%;
// `;