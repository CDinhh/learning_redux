import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'filter',
    initialState: {
        search: '',
        state: 'All',
        priority: []
    },
    reducers: {
        setSearchFilter: (state, action) => {
            state.search = action.payload;
        },
        setStateFilter: (state, action) => {
            state.state = action.payload
        },
        setPriorityFilter: (state, action) => {
            state.priority = action.payload
        }
    }
});

