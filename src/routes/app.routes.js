import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';

const AppRoutes = () => (
  <BrowserRouter>
    <Box css={{ height: '100%' }}>
      <Switch>
        <Route exact path="/" component={() => <h1>Dashboard</h1>} />
      </Switch>
    </Box>
  </BrowserRouter>
);

export default AppRoutes;
