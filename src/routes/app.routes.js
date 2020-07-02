import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Dashboard from '../page/Dashboard/Dashboard';

const AppRoutes = () => (
  <BrowserRouter>
    <Box css={{ height: '100%' }}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Box>
  </BrowserRouter>
);

export default AppRoutes;
