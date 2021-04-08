import {DISPLAY_TYPE} from './display.types';

const INITIAL_STATE = {
  item: [],
};

const deleteData = (mainData, id) => {
  return mainData.filter(item => {
    return item.id !== id;
  });
};

const displayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISPLAY_TYPE.SUBMIT_ITEM:
      return {
        ...state,
        item: [...state.item, action.payload],
      };
    case DISPLAY_TYPE.DELETE_ITEM:
      return {
        ...state,
        item: deleteData(state.item, action.payload),
      };
    case DISPLAY_TYPE.DELETE_ALL:
      return {
        ...state,
        item: [],
      };
    default:
      return state;
  }
};
export default displayReducer;
