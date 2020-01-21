export const initialState = {
    todos: []
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state, 
                todos: [...state.todos, {
                    todo: action.payload,
                    id: Date.now(),
                    completed: false
                }]
            }
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.completed === false)
            }
        case 'COMPLETE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        todo.completed = !todo.completed
                        return todo
                    }
                    else return todo
                })
            }
        default:
            return state
    }
}