import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    width: '100%',
  },
  home: {
    background: '#1a237e',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    width: 600,
    height: 300,
    margin: 'auto',
    padding: 50,
    textAlign: 'center',
    marginTop: 200,
    borderStyle: 'solid',
    borderRadius: 10,
    border: 1,
    lineHeight: 2,
  },
};

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant='h3' gutterBottom className={classes.home}>
          Welcome to the TV Show Watchlist App!
        </Typography>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);