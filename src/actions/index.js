let nextTodoId = 1;

export const addTodo = todo => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
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