import React, { useContext, useEffect } from 'react';
import AuthContext from '../../shared/contexts/auth.context';
import * as MarverServiceApi from '../../shared/services/marver-api.service';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import useStyles from './Dashboard.style';

const Dashboard = () => {
  const classes = useStyles();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    MarverServiceApi.getCharacterComics(user.heroId).then((response) => {
      console.log(response.data.data.results);
    });
  }, [user]);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Dashboard
          </Typography>
          <Button color="inherit">Signout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Dashboard;
