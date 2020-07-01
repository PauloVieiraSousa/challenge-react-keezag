import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import SignIn from '../page/SignIn/SignIn';

const AuthRoutes = () => (
  <BrowserRouter>
    <Box css={{ height: '100%' }}>
      <Switch>
        <Route exact path="/" component={SignIn} />
      </Switch>
    </Box>
  </BrowserRouter>
);

export default AuthRoutes;
