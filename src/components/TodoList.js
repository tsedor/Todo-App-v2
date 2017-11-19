import React from 'react';
import { List, ListItem } from 'material-ui/List';
import CheckBox from 'material-ui/Checkbox';
import Clear from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
import { redA700 } from 'material-ui/styles/colors';
import { toggleTodo, removeTodo } from '../actions';

import { connect } from 'react-redux';

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <List>
    {todos.map( todo => {
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

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  removeTodo: id => dispatch(removeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);