const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {id: action.id, todo: action.todo, completed: false}]
    case 'REMOVE_TODO':
      return state.filter( item => action.id !== item.id);
    case 'TOGGLE_TODO':
      return state.map(item => (action.id === item.id) ? {...item, completed: !item.completed} : item )
    default:
      return state;
  }
}

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 2:
      return todos.filter(t => !t.completed)
    case 3:
      return todos.filter(t => t.completed)
    default:
      return todos
  }
}

export default todos;