import {combineReducers, createStore} from 'redux';
import setItemReducer from './SetItem/set.reducers';
import displayReducer from './DispalyItem/display.reducer';
import {applyMiddleware} from 'redux'; //to track redux
import logger from 'redux-logger'; //to track redux

const rootReducer = combineReducers({
  itemList: setItemReducer,
  submitList: displayReducer,
});
const configureStore = () => {
  const middleware = [];
  middleware.push(logger);
  return createStore(rootReducer, applyMiddleware(...middleware));
};

export default configureStore;
