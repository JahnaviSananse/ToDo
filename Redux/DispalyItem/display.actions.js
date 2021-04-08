import {DISPLAY_TYPE} from './display.types';

export const submitItem = data => ({
  type: DISPLAY_TYPE.SUBMIT_ITEM,
  payload: data,
});

export const deleteItem = id => ({
  type: DISPLAY_TYPE.DELETE_ITEM,
  payload: id,
});

export const deleteAll = () => ({
  type: DISPLAY_TYPE.DELETE_ALL,
});
