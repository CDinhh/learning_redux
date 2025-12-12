export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'todoList/toggleTodo',
        payload: id
    }
}


export const setSearchFilter = (text) => {
    return {
        type: 'filter/setSearchFilter',
        payload: text
    }
}

export const setStateFilter = (state) => {
    return {
        type: 'filter/setStateFilter',
        payload: state
    }
}

export const setPriorityFilter = (priorities) => {
    return {
        type: 'filter/setPriorityFilter',
        payload: priorities
    }


}