import React from 'react'
import Navigation from './Navigation'
import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

function Routes({login, signup, logout}) {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/"> 
          <Home /> 
        </Route>
        <Route exact path="/portfolio"> 
          <Portfolio /> 
        </Route>
        <Route exact path="/about"> 
          <About /> 
        </Route>
        <Route exact path="/contact"> 
          <Contact /> 
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;