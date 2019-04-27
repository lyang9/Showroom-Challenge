import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// import User from './User';

const styles = {

};

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      id: 1,
      username: 'ckIrECaP',
    };
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/users')
      .then(response => this.setState({ users: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <div className={classes.root}>
        <Typography variant='h3' gutterBottom>
          Welcome to, {this.state.username}!
          <br/>
          Your user id is: {this.state.id}.
        </Typography>
        <ul>
          {this.state.users.map(user => {
            return (
              <Link to={`/user/${user.id}`}>
                <li key={user.id}>{user.username}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

Users.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Users);