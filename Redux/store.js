import {combineReducers, createStore} from 'redux';
import setItemReducer from './SetItem/set.reducers';
import displayReducer from './DispalyItem/display.reducer';

const rootReducer = combineReducers({
  itemList: setItemReducer,
  submitList: displayReducer,
});
const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
