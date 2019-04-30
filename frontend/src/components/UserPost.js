import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';

const styles = {

};

class UserPost extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant='h3' gutterBottom>
          Add new show to watch...
        </Typography>
        <form className={classes.container} noValidate autoComplete='off'>
          <TextField
            id='outlined-name'
            label='Title'
            className={classes.TextField}
            value={this.handleChange('title')}
            margin='normal'
            variant='outlined'
          />
        </form>
      </div>
    );
  }
}

UserPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserPost);