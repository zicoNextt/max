import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import New from './pages/New';
import Results from './pages/Results';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/new" component={New}/>
        <Route path="/results" component={Results}/>
      </Switch>
    </BrowserRouter>
  )
}