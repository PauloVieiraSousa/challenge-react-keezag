import React, { memo } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './CardComic.style';
import PropTypes from 'prop-types';
import moment from 'moment';

const CardComic = ({ hero }) => {
  const classes = useStyles();

  function handleRedirect() {
    return window.open(hero.url, '_blank');
  }

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={handleRedirect}>
        <CardHeader
          avatar={<Avatar className={classes.avatar} src={hero.image} />}
          title={hero.title}
          subheader={`Data Modificação: ${moment(hero.modified).format(
            'DD/MM/YYYY'
          )}`}
        ></CardHeader>
        <CardMedia
          className={classes.media}
          image={hero.image}
          title={hero.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Descrição: {hero.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CardComic.propTypes = {
  hero: PropTypes.object
};

export default memo(CardComic, (prevProps, nextProps) => {
  return prevProps.hero === nextProps.hero;
});
