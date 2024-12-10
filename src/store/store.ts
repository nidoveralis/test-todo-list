import { createStore, combineReducers } from 'redux';
import listTasks from './reducer/index';

const rootReducer = combineReducers({
  listTasks: listTasks
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);