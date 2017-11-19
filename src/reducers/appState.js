const initialState = {
  addTodoDialog: false,
  addTodoInputValue: "",
  filter: 1
}

const appState = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO_DIALOG':
      return {...state, addTodoDialog: !state.addTodoDialog}
    case 'ADD_TODO_INPUT_CHANGE':
      return {...state, addTodoInputValue: action.value}
    case 'ADD_TODO':
      return {...state, addTodoInputValue: "", addTodoDialog: false}
    case 'CHANGE_FILTER':
      return {...state, filter: action.id}
    default:
      return state;
  }
}

export default appState;