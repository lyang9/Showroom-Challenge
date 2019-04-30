import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class UserWatching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [
        {
          id: '',
          username: '',
        },
      ],
      show: [
        {
          id: '',
          img_url: '',
          title: '',
        },
      ],
      genre: [
        {
          id: '',
          genre_name: '',
        },
      ],
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getUserWatching(id);
  }

  getUserWatching = id => {
    axios
      .get(`http://localhost:5000/api/users/${id}/shows`)
      .then(response => {
        this.setState({
          id: response.data[0].id,
          img_url: response.data[0].img_url,
          title: response.data[0].title,
          genre_name: response.data[0].genre_name
        });
      })
      .catch(error => (
        console.log('Server Error', error)
      ));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography>
          <div>{this.state.img_url}</div>
          <div>{this.state.title}</div>
          <div>{this.state.genre_name}</div>
        </Typography>
      </div>
    );
  }
};

UserWatching.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserWatching);