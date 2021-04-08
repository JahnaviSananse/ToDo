import {ITEM_TYPE} from './set.types';
export const setItemToList = item => ({
  type: ITEM_TYPE.SET_ITEM,
  payload: item,
});
