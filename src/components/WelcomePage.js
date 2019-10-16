import React from "react";
import {Route} from 'react-router-dom';
import CharacterList from './CharacterList';

export default function WelcomePage() {
  return (
    <section className="welcome-page ">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
      </header>
        <Route exact path='/' component={CharacterList}/>
    </section>
  );
}
