import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignInFormContainer from './SignInFormContainer';
import SignUpFormContainer from './SignUpFormContainer';
import MainContainer from './MainContainer';
import './App.css';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={SignInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute path="/input" component={MainContainer} />
      <ProtectedRoute path="/analyzer" component={MainContainer} />
      <ProtectedRoute exact path="/" component={MainContainer} />
    </Switch>
  </div>
);

export default App;