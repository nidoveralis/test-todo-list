import { ItemProps } from '../../Interface';

export const addNewItem = (item: String) => {
  return {
    type: 'ADD_ITEM',
    payload: item
  }
};

export const removeItem = (item: Number) => {
  return {
    type: 'REMOVE_ITEM',
    payload: item
  }
};

export const completedItem = (item: Number) => {
  return {
    type: 'COMPLETED_ITEM',
    payload: item
  }
};

export const editItem = (item: ItemProps) => {
  return {
    type: 'EDIT_ITEM',
    payload: item
  }
};

export const searchItem = (data: string) => {
  return {
    type: 'SEARCH_ITEM',
    payload: data
  }
};

export const searching = (data: boolean) => {
  return {
    type: 'SEARCHING',
    payload: data
  }
};

export const changeSortType = (data: string) => {
  return {
    type: 'SORT_TYPE',
    payload: data
  }
};

export const changeError = (error: string) => {
  return {
    type: 'EDIT_ERROR',
    payload: error
  }
};