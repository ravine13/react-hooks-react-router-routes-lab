import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>
    <NavBar />
    <Switch>
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/directors" component={Directors} />
      <Route exact path="/actors" component={Actors} />
      <Route exact path="/" component={Home} />

    </Switch>
  </div>;
}

export default App;
