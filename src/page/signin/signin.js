import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector, useDispatch } from 'react-redux';
import { SigninStyles } from './signin.styles';
import * as Action from '../../shared/store/actions/signin.action';

const Signin = () => {
  const classes = SigninStyles();

  const [user, setUser] = useState({ value: null });
  const [password, setPassword] = useState({ value: null });

  const dispatch = useDispatch();
  const signinState = useSelector((state) => state.signin);

  function handleSignIn(e) {
    e.preventDefault();
    dispatch(Action.signin({ user: user.value, password: password.value }));
  }

  return (
    <Container className={classes.root} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {signinState.error !== null && (
          <Alert severity="error">{signinState.error}</Alert>
        )}

        {signinState.loading && (
          <CircularProgress className={classes.loading} color="secundary" />
        )}

        {!signinState.loading && (
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
        )}
      </div>
    </Container>
  );
};

export default Signin;
