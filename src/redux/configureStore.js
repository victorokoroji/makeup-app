import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import makeupReducer from './makeups/makeups';

const rootReducer = combineReducers({
  makeups: makeupReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;
