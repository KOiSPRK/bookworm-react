import React from 'react';
import LoginForm from '../forms/LoginForm';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class LoginPage extends React.Component {

  submit = (data) =>
  this.props.login(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return(
      <div>
        <h1>Login Page</h1>

        <LoginForm submit={this.submit}/>
      </div>
    )
  }
}

LoginPage.propsTypes = {
  history: PropsTypes.shape({
    push: PropsTypes.func.isRequired
  }).isRequired,
  login: PropsTypes.func.isRequired
}

export default connect(null, { login })(LoginPage);
