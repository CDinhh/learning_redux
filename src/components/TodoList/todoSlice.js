import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn Redux', completed: false, priority: 'High' },
        { id: 2, name: 'Learn Tailwind', completed: true, priority: 'Medium' },
        { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' }
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        toggleTodo: (state, action) => {
            const targetTodo = state.find(todo => todo.id === action.payload);
            if (targetTodo) {
                targetTodo.completed = !targetTodo.completed;
            }
        }
    }
})

