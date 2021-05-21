import React from 'react'
import Navigation from './Navigation'
import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";

function Routes({login, signup, logout}) {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Switch>
        <Route exact path="/"> 
          <Home /> 
        </Route>
        <Route exact path="/projects"> 
          <Portfolio /> 
        </Route>
        <Route exact path="/about"> 
          <About /> 
        </Route>
        <Route exact path="/contact"> 
          <Contact /> 
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default Routes;