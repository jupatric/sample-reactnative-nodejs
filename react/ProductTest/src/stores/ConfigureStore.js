import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

const logger = createLogger();

export default function configureStore() {
  let store = createStore(rootReducer, applyMiddleware(thunkMiddleware, promiseMiddleware(), logger))
  return store
}