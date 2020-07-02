import React, { useState, memo } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import useStyles from './Header.style';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import Typography from '@material-ui/core/Typography';

const Header = ({ user, signOut }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <AppBar className={classes.bar} position="relative">
      <Toolbar>
        <Typography color="secondary" variant="h6" className={classes.title}>
          Dashboard
        </Typography>
        <Button
          color="secondary"
          variant="outlined"
          aria-controls="menu"
          onClick={handleClick}
          endIcon={<AccountCircleOutlined />}
        >
          {user.name}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleSignOut}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  signOut: PropTypes.func
};

export default memo(Header, (prevProps, nextProps) => {
  return prevProps.user === nextProps.user;
});
