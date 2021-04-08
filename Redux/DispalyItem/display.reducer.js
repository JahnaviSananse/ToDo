import {DISPLAY_TYPE} from './display.types';

const INITIAL_STATE = {
  item: [],
};

const deleteData = (mainData, id) => {
  return mainData.filter(item => {
    return item.id !== id;
  });
};

const checkItem = (mainData, id) => {
  return mainData.map(value => {
    return value.id === id ? {...value, checked: !value.checked} : value;
    // return value.id === id ? {id:value.id,name:value.name,checked: true} : value;
  });
};

const checkAll = (mainData, status) => {
  return mainData.map(value => {
    return {...value, checked: !status};
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
    case DISPLAY_TYPE.CHECK_ITEM:
      return {
        ...state,
        item: checkItem(state.item, action.payload),
      };
    case DISPLAY_TYPE.CHECK_ALL:
      return {
        ...state,
        item: checkAll(state.item, action.payload),
      };
    default:
      return state;
  }
};
export default displayReducer;
