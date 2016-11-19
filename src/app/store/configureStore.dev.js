import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import reducer from '../reducers';


export default function configureStore(initialState, history) {
  const logger = createLogger();

    // Add so dispatched route actions to the history
    const reduxRouterMiddleware = routerMiddleware(history);

    const middleware = applyMiddleware(thunk, logger, reduxRouterMiddleware);

    const createStoreWithMiddleware = compose(middleware);

    const store = createStoreWithMiddleware(createStore)(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
