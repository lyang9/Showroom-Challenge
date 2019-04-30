import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../tvlogo.png';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  href: {
    textDecoration: 'none',
  },
  navButton: {
    // background: 'orange',
    width: 120,
    display: 'flex',
    justifyContent: 'space-evenly',
    color: 'white',
  },
};

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' color='inherit' className={classes.grow}>
              TV Show Watchlist
            </Typography>
            <a href='/' className={classes.href}>
              <p className={classes.navButton}>Home</p>
            </a>
            <a href='/users' className={classes.href}>
              <p className={classes.navButton}>Users</p>
            </a>
            <a href='/shows' className={classes.href}>
              <p className={classes.navButton}>TV Shows</p>
            </a>
            <a href='/genres' className={classes.href}>
              <p className={classes.navButton}>Genre</p>
            </a>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);