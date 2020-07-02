import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../shared/contexts/auth.context';
import * as MarverServiceApi from '../../shared/services/marver-api.service';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './Dashboard.style';
import CardComic from '../../shared/components/CardComic/CardComic';
import Header from '../../shared/components/Header/Header';

const Dashboard = () => {
  const classes = useStyles();
  const { user, signOut } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    setLoading(true);
    MarverServiceApi.getCharacterComics(user.heroId)
      .then((response) => {
        setComics(response.data.data.results);
      })
      .finally(() => setLoading(false));
  }, [user]);

  return (
    <div>
      <Header user={user} signOut={signOut} />
      <Container maxWidth="lg" className={classes.container}>
        {loading && <CircularProgress color="secondary" />}
        {comics.map((comic) => (
          <CardComic
            key={comic.id}
            className={classes.card}
            hero={{
              title: comic.title,
              modified: comic.modified,
              description: comic.description,
              image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
              url: comic.urls[0].url
            }}
          />
        ))}
      </Container>
    </div>
  );
};

export default Dashboard;
