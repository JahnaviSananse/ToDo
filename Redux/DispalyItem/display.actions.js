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

export const checkItem = id => ({
  type: DISPLAY_TYPE.CHECK_ITEM,
  payload: id,
});

export const checkAllItem = state => ({
  type: DISPLAY_TYPE.CHECK_ALL,
  payload: state,
});

export const updateData = item => ({
  type: DISPLAY_TYPE.UPDATE_DATA,
  payload: item,
});

export const updateFlag = update => ({
  type: DISPLAY_TYPE.UPDATE_FLAG,
  payload: update,
});

export const apiCall = link => ({
  type: DISPLAY_TYPE.API_CALL,
  payload: link,
});
