import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import { compact } from 'lodash';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import sagas from '../sagas';

export function configureStore(initialState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = compact([
    thunk.withExtraArgument(),
    sagaMiddleware,
    __DEV__ ? createLogger() : null
  ]);

  const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(...middlewares))
  );
  
  sagaMiddleware.run(sagas);
  return store;
}
