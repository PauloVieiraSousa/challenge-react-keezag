import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../shared/contexts/auth.context';
import * as MarverServiceApi from '../../shared/services/marver-api.service';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import useStyles from './Dashboard.style';
import CardComic from '../../shared/components/CardComic/CardComic';

const Dashboard = () => {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    MarverServiceApi.getCharacterComics(user.heroId).then((response) => {
      console.log(response.data.data.results);
      setComics(response.data.data.results);
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

      {comics.map((comic) => (
        <CardComic
          key={comic.id}
          hero={{
            title: comic.title,
            description: comic.description,
            modified: comic.modified,
            image: comic.thumbnail.path + '.' + comic.thumbnail.extension
          }}
        />
      ))}
    </div>
  );
};

export default Dashboard;
