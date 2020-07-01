import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';

import SignIn from './page/signin/signin';

const App = () => (
  <Box css={{ height: '100%' }}>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signin" component={SignIn} />
    </Switch>
  </Box>
);

export default App;
