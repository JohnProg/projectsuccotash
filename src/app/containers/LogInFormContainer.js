import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LogInForm from '../components/LogInForm';
import autoBind from 'react-autobind';
import { push } from 'react-router-redux';

import * as actionCreators from '../actions/auth';

class LogInFormContainer extends React.Component {

    static propTypes = {
        dispatch: React.PropTypes.func.isRequired,
        isAuthenticated: React.PropTypes.bool.isRequired,
        isAuthenticating: React.PropTypes.bool.isRequired,
        statusText: React.PropTypes.string,
        actions: React.PropTypes.shape({
            logInUser: React.PropTypes.func.isRequired,
        }).isRequired,
        location: React.PropTypes.shape({
            query: React.PropTypes.object.isRequired
        })
    };

    constructor(props) {
        super(props);
        autoBind(this);

        const redirectRoute = this.props.location ? this.props.location.query.next || '/' : '/';
        this.state = {
            formValues: {
                email: '',
                password: ''
            },
            redirectTo: redirectRoute
        };
    }



    componentWillMount() {
        if (this.props.isAuthenticated) {
            this.props.dispatch(push('/'));
        }
    }


    onFormChange = (value) => {
        this.setState({ formValues: value });
    };

  render() {
    return <LogInForm onFormChange={this.onFormChange} statusText={this.props.statusText} formValues={this.state.formValues} redirectTo={this.state.redirectTo} logInUser={this.props.actions.logInUser} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(LogInFormContainer);
