import React from 'react';
import { List, ListItem } from 'material-ui/List';
import CheckBox from 'material-ui/Checkbox';
import Clear from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
import { redA700 } from 'material-ui/styles/colors';
import { toggleTodo, removeTodo } from '../actions';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getVisibleTodos } from '../reducers/todos';

const TodoList = ({ todos, filter, toggleTodo, removeTodo, tmp }) => (
  <List>
    {tmp.map( todo => {
      return (<ListItem 
        style={{textDecoration: todo.completed ? "line-through" : "none"}} 
        primaryText={todo.todo} 
        leftCheckbox={<CheckBox checked={todo.completed} onClick={() => toggleTodo(todo.id)} />}
        rightIconButton={<IconButton tooltip="Usuń" onClick={() => removeTodo(todo.id)}><Clear color={redA700} /></IconButton>}
        key={todo.id}
      />)
    })}
    
  </List>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.number.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos,
  tmp: getVisibleTodos(state.todos, state.appState.filter),
  filter: state.appState.filter
})

const mapDispatchToProps = {
  toggleTodo,
  removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);