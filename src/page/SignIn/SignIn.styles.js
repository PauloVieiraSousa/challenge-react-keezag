import { makeStyles } from '@material-ui/core/styles';

export const SigninStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  alert: {
    margin: '10px 0px 10px 0px',
    width: '100%'
  },
  paper: {
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0px 0px 8px 3px rgba(0,0,0,0.12)'
  },
  loading: {
    width: '100%',
    height: '100px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
