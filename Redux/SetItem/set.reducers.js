import {ITEM_TYPE} from './set.types';

const INITIAL_STATE = {
  item: '',
};
const setItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITEM_TYPE.SET_ITEM:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};
export default setItemReducer;
