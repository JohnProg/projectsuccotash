import React from 'react';
import { push } from 'react-router-redux';
import t from 'tcomb-form';
import autoBind from 'react-autobind';

const Form = t.form.Form;

const Signup = t.struct({
    firstName: t.String,
    lastName: t.String,
    email: t.String,
    password: t.String,
    confirmPassword: t.String
});

const SignupFormOptions = {
    auto: 'placeholders',
    help: <i>Register for an account</i>,
    fields: {
        password: {
            type: 'password',
        },
        confirmPassword: {
          type: 'password',
        }
    }
};

class SignupForm extends React.Component {

  constructor(props) {
        super(props);
        autoBind(this);
    }

    signup = (e) => {
        e.preventDefault();
        const value = this.signupForm.getValue();
        if (value) {
            this.props.signUpUser(value.email, value.firstName, value.lastName, value.password);
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
            <div>
                <h1>Sign Up</h1>
                <div>
                    {statusText}
                    <form onSubmit={this.signup}>
                        <Form ref={(ref) => { this.signupForm = ref; }}
                              type={Signup}
                              options={SignupFormOptions}
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

  export default SignupForm;
