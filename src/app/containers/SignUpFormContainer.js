import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignUpForm from '../components/SignUpForm.js';
import autoBind from 'react-autobind';
import { push } from 'react-router-redux';

import * as actionCreators from '../actions/auth';

class SignUpFormContainer extends React.Component {

  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      formValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  }

  componentWillMount() {
        if (this.props.isAuthenticated) {
            this.props.dispatch(push('/'));
        }
    }

  onFormChange = (value) => {
      console.log(value);
      this.setState({ formValues: value });
  };

  render() {
    return <SignUpForm onFormChange={this.onFormChange} statusText={this.props.statusText} formValues={this.state.formValues} redirectTo={this.state.redirectTo} signUpUser={this.props.actions.signUpUser} />;
  }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isAuthenticating: state.auth.isAuthenticating,
        statusText: state.auth.statusText
    };
  };

const mapDispatchToProps = (dispatch) => {
  return {
        dispatch,
        actions: bindActionCreators(actionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormContainer);
