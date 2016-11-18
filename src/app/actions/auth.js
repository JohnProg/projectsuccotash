import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import { SERVER_URL } from '../utils/config';
import { checkHttpStatus, parseJSON } from '../utils';

//Log In User
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';

//log out user
export const LOGOUT_USER = 'LOGOUT_USER';

export function loginUserRequest() {
    return {
        type: LOGIN_USER_REQUEST
    };
}

export function logInUser(email, password, redirect = '/') {
  return (dispatch) => {
        dispatch(loginUserRequest());
        const auth = btoa(`${email}:${password}`);
        return fetch(`${SERVER_URL}/api/v1/accounts/login/`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Basic ${auth}`
            }
        })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                try {
                    dispatch(logInUserSuccess(response.token, response.user));
                    dispatch(push(redirect));
                } catch (e) {
                    dispatch(logInUserFailure({
                        response: {
                            status: 403,
                            statusText: 'Invalid token'
                        }
                    }));
                }
            })
            .catch((error) => {
                dispatch(logInUserFailure(error));
            });
    };
}

export function logInUserSuccess(token, user) {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('user', JSON.stringify(user));
  return {
      type: LOGIN_USER_SUCCESS,
      payload: {
          token,
          user
      }
  };
}

export function logInUserFailure(error) {
  sessionStorage.removeItem('token');
  return {
      type: LOGIN_USER_FAILURE,
      payload: {
          status: error.response.status,
          statusText: error.response.statusText
      }
  };
}

export function logoutUser() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    return {
        type: LOGOUT_USER
    };
}

export function logoutUserAndRedirect() {
    return (dispatch, state) => {
        dispatch(logoutUser());
        dispatch(push('/login'));
        return Promise.resolve(); // TODO: we need  promise here because of tests, find a better way
    };
}


