import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Homepage = ({ isAuthenticated }) => <div>
  <h1>Home Page</h1>
  { isAuthenticated ? <button>Logout</button> : <Link to="/login">Login</Link> }
</div>

Homepage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps)(Homepage);
