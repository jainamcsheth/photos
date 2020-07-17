import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './core/PrivateRoute';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <PrivateRoute path="/home" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
