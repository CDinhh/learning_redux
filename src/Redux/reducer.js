import { combineReducers } from 'redux';

import todoReducer from '../components/TodoList/TodoSlide';
import filterReducer from '../components/Filters/FilterSlide';
// const rootReducer = (state = {}, action) => {
//     return {
//         todoList: todoReducer(state.todoList, action),
//         filter: filterReducer(state.filter, action)
//     }
// }

const rootReducer = combineReducers({
    todoList: todoReducer,
    filter: filterReducer
});

export default rootReducer;