import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers/reducer';

export const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
);

export default store;
