import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    cardTitle: {
      fontSize: '1rem',
      fontWeight: 600
    },
    avatar: {
      backgroundColor: '#fff',
      border: '1px solid silver'
    },
    media: {
      height: 0,
      paddingTop: '56.25%'
    },
    card: {
      maxWidth: 300,
      margin: '10px',
      padding: '10px 0px 10px 0px'
    }
  })
);

export default useStyles;
