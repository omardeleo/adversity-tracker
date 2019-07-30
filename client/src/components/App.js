import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainContainer from './MainContainer';

const App = () => (
  <div>
    <Switch>
      <Route path="/" component={MainContainer} />
    </Switch>
  </div>
);

export default App;