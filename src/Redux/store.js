import { configureStore } from "@reduxjs/toolkit";
import todoSlice from '../components/TodoList/todoSlice';
import filterSlice from '../components/Filters/filterSlice';

const store = configureStore({
    reducer: {
        todoList: todoSlice.reducer,
        filter: filterSlice.reducer
    }
});

export default store;