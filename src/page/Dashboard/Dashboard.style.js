import { createStyles, makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

export default useStyles;
