import { combineReducers, Reducer, AnyAction } from 'redux';
import reducerListTasks from './reducerListTasks';
import { ArrayProps } from '../../Interface';

interface IReducers {
  listTasks: Reducer<ArrayProps, AnyAction>;
}

const listStore = combineReducers<IReducers>({
  listTasks: reducerListTasks,
});

export default listStore;
