import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

export default createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
);

sagaMiddleware.run(rootSaga);
