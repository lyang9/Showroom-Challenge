import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {

};

class Shows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      title: '',
      users: [],
      username: '',
    }
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/shows')
      .then(response => this.setState({ shows: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant='h3' gutterBottom>
          Masterlist of TV Shows
        </Typography>
        {this.state.shows.map(show => {
          return (
            <li key={show.id}>{show.title}</li>
          )
        })}
        <Typography variant='h5' gutterBottom>
          {this.state.title}
        </Typography>
        <Typography variant='h5' gutterBottom>
          Who's Watching? {this.state.username}
        </Typography>
      </div>
    );
  }
}

Shows.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Shows);