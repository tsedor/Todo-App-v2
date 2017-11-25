export const addTodo = (todo, id) => ({
  type: 'ADD_TODO',
  id,
  todo
})

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const addTodoDialog = () => ({
  type: 'ADD_TODO_DIALOG'
})

export const addTodoInputValueChange = value => ({
  type: 'ADD_TODO_INPUT_CHANGE',
  value
})

export const changeFilter = id => ({
  type: 'CHANGE_FILTER',
  id
})

export const leftMenu = open => ({
  type: 'LEFT_MENU',
  open
})

export const showAboutDialog = () => ({
  type: 'SHOW_ABOUT_DIALOG'
})