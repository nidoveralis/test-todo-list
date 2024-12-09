import { Reducer, AnyAction } from 'redux';
import { ArrayProps, ItemProps } from '../Interface';

const initialState: ArrayProps = {
  todolist: [],
  searchResults: [],
  searching: false,
  sortType: 'all',
  error: '',
};

let idCounter = 0;

export const listTasks: Reducer<ArrayProps, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const today = new Date();
      const date = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const year = today.getFullYear();
      const newItem: ItemProps = {
        id: idCounter++,
        text: action.payload,
        status: false,
        day: `${date}.${month}.${year}`
      };
      return {
        ...state,
        todolist: [...state.todolist, newItem]
      };
    case 'REMOVE_ITEM':
      const updateList = state.todolist.filter((el) => el.id !== action.payload);
      const updatedSearch = state.searchResults;

      return {
        ...state,
        todolist: updateList,
        updatedSearch
      };
    case 'COMPLETED_ITEM':
      const updatedTodoList = state.todolist.map((el) => {
        if (el.id === action.payload.item) {
          return { ...el, status: action.payload.status };
        }
        return el;
      });
      const updateSearchResults = state.searchResults && state.searchResults.map((el) => {
        if (el.id === action.payload) {
          return { ...el, status: !el.status };
        }
        return el;
      });
      const updateSearching = state.searchResults;
      return {
        ...state,
        todolist: updatedTodoList,
        searchResults: updateSearchResults,
        updateSearching
      };
    case 'SEARCH_ITEM':
      const searchString = action.payload.toLowerCase();
      const searchResults = state.todolist.filter((el) => el.text.toLowerCase().includes(searchString));
      return {
        ...state,
        searchResults: searchResults,
        searching: true
      };
    case 'SEARCHING':
      return {
        ...state,
        searching: false
      };
    case 'SORT_TYPE':
      return {
        ...state,
        sortType: action.payload,
      };
    case 'EDIT_ERROR':
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};