import React from 'react';
import Routes from './routes/index';
import { AuthProvider } from './shared/contexts/auth.context';

const App = () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);

export default App;
