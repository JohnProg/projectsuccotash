import {
    LOGOUT_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE, SIGNUP_USER_REQUEST
} from '../actions/auth';

const initialState = {
    token: null,
    userName: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null
};

export default function(state = initialState, action) {
  let error;

  switch(action.type) {
    case SIGNUP_USER_REQUEST:
    return { ...state,  
        statusText:null
    };

    case SIGNUP_USER_SUCCESS:
    return { ...state, 
            statusText: 'You have successfully signed up.'
        };

    case SIGNUP_USER_FAILURE: 
    return { ...state, 
            statusText: `Registration Error: ${action.payload.status} ${action.payload.statusText}`
        };
    case LOGIN_USER_REQUEST:
    return { ...state, 
        isAuthenticating: true, 
        statusText:null
    };

    case LOGIN_USER_SUCCESS:
    return { ...state, 
            isAuthenticating: false,
            isAuthenticated: true,
            token: action.payload.token,
            userName: action.payload.user.email,
            statusText: 'You have been successfully logged in.'
        };

    case LOGIN_USER_FAILURE: 
    return { ...state, 
            isAuthenticating: false,
            isAuthenticated: false,
            token: null,
            userName: null,
            statusText: `Authentication Error: ${action.payload.status} ${action.payload.statusText}`
        };

    case LOGOUT_USER:
    return { ...state, 
            isAuthenticated: false,
            token: null,
            userName: null,
            statusText: 'You have been successfully logged out.'
        };

    default:
    return state;
  } 
}
