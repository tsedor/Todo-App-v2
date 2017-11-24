const appState = (state = null, action) => {
  switch (action.type) {
    case 'ADD_TODO_DIALOG':
      return {...state, addTodoDialog: !state.addTodoDialog}
    case 'ADD_TODO_INPUT_CHANGE':
      return {...state, addTodoInputValue: action.value}
    case 'ADD_TODO':
      return {...state, addTodoInputValue: "", addTodoDialog: false, nextId: state.nextId+1}
    case 'CHANGE_FILTER':
      return {...state, filter: action.id}
    case 'LEFT_MENU':
      return {...state, menu: action.open}
    case 'SHOW_ABOUT_DIALOG':
      return {...state, menu: false, aboutDialog: !state.aboutDialog}
    default:
      return state;
  }
}

export default appState;