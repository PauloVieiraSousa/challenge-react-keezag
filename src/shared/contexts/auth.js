import React, { createContext, useState } from 'react';
import * as auth from '../services/auth';

const AuthContext = createContext({ signed: true });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  function signIn(data) {
    auth.signIn(data).then(
      (response) => setUser(response.user),
      ({ message }) => setError(message)
    );
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
