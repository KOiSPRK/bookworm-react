import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Homepage from "./components/pages/Homepage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";

const App = ({ location, isAuthenticated }) => (
  <div className="ui container">
  <Route location={location} path="/" exact component={Homepage} />
  <Route location={location} path="/confirmation/:token" exact component={ConfirmationPage} />
  <GuestRoute location={location} path="/login" exact component={LoginPage} />
  <GuestRoute location={location} path="/signup" exact component={SignupPage} />
  <UserRoute location={location} path="/dashboard" exact component={DashboardPage} />
</div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email
  };
}

export default connect(mapStateToProps)(App);
