import React, { createContext, useState } from 'react';
import * as auth from '../services/auth.service';

const AuthContext = createContext({ signed: true });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  function signIn(data) {
    auth.signIn(data).then(
      (response) => setUser(response),
      ({ message }) => setError(message)
    );
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, error, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
