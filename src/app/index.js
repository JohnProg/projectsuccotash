import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import { createStore } from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import routes from './routes';
import {Router, browserHistory} from 'react-router';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
     <Router history={browserHistory} routes={routes}>
    </Router>
  </Provider>,
  document.getElementById('app')
);
