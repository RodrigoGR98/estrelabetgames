import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import GamePage from './pages/GamePage';

export default function Routes() {

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/game" component={GamePage} />
    </Switch>
  )
}
