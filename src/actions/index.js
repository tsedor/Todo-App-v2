export const addTodo = (todo, id) => {
  return {
    type: 'ADD_TODO',
    id,
    todo
  }
}

export const removeTodo = id => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const addTodoDialog = () => {
  return {
    type: 'ADD_TODO_DIALOG'
  }
}

export const addTodoInputValueChange = value => {
  return {
    type: 'ADD_TODO_INPUT_CHANGE',
    value
  }
}

export const changeFilter = id => {
  return {
    type: 'CHANGE_FILTER',
    id
  }
}

export const leftMenu = open => {
  return {
    type: 'LEFT_MENU',
    open
  }
}

export const showAboutDialog = () => {
  return {
    type: 'SHOW_ABOUT_DIALOG'
  }
}