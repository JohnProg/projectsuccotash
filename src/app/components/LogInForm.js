import React from 'react';
import { push } from 'react-router-redux';
import t from 'tcomb-form';
import autoBind from 'react-autobind';

const Form = t.form.Form;

const Login = t.struct({
    email: t.String,
    password: t.String
});

const LoginFormOptions = {
    auto: 'placeholders',
    help: <i>Log into your account</i>,
    fields: {
        password: {
            type: 'password',
        }
    }
};

class LoginForm extends React.Component {

  constructor(props) {
        super(props);
        autoBind(this);
    }

    login = (e) => {
        e.preventDefault();
        const value = this.loginForm.getValue();
        if (value) {
            this.props.logInUser(value.email, value.password, this.props.redirectTo);
        }
    };

    render() {
        let statusText = null;
        if (this.props.statusText) {
          <div>
            statusText = (
                {this.props.statusText}
            );
          </div>
        }

        return (
            <div className="login-form">
                <h1>Login</h1>
                <div>
                    {statusText}
                    <form onSubmit={this.login}>
                        <Form ref={(ref) => { this.loginForm = ref; }}
                              type={Login}
                              options={LoginFormOptions}
                              value={this.props.formValues}
                              onChange={this.props.onFormChange}
                        />
                        <button disabled={this.props.isAuthenticating}
                                type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
  }

  export default LoginForm;
