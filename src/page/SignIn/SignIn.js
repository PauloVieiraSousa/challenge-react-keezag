import React, { useState, useContext } from 'react';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SigninStyles } from './SignIn.styles';
import AuthContext from '../../shared/contexts/auth';

const SignIn = () => {
  const classes = SigninStyles();
  const { signIn, error } = useContext(AuthContext);

  const [user, setUser] = useState({ value: null });
  const [password, setPassword] = useState({ value: null });

  function handleSignIn(e) {
    e.preventDefault();
    signIn({ user: user.value, password: password.value });
  }

  return (
    <Container className={classes.root} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        {error && (
          <Alert className={classes.alert} variant="outlined" severity="error">
            {error}
          </Alert>
        )}

        <form className={classes.form} onSubmit={handleSignIn} noValidate>
          <TextField
            error={user.error}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => {
              setUser({
                ...user,
                value: e.target.value
              });
            }}
            label="Email Address or User"
            name="email"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            error={password.error}
            fullWidth
            onChange={(e) => setPassword({ value: e.target.value })}
            name="password"
            label="Password"
            type="password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
