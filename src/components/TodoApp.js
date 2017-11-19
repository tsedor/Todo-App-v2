import React from 'react';
import AppBar from 'material-ui/AppBar';
import Add from 'material-ui/svg-icons/content/add-circle-outline';
import IconButton from 'material-ui/IconButton';
import { connect } from 'react-redux';

import TodoList from './TodoList';
import FilterSelector from './FilterSelector';
import AddTodoDialog from './AddTodoDialog';
import { addTodoDialog } from '../actions/index';

const TodoApp = ({ addTodoButtonClick }) => (
  <div>
    <AppBar 
      iconElementRight={<IconButton onClick={addTodoButtonClick}><Add /></IconButton>} 
      onLeftIconButtonTouchTap={() => console.log('menu icon')} 
      onRightIconButtonTouchTap={() => console.log('add icon')} 
    />
    <FilterSelector />
    <TodoList />
    <AddTodoDialog />
  </div>
)

const mapDispatchToProps = dispatch => ({
  addTodoButtonClick: () => dispatch(addTodoDialog())
})

export default connect(null, mapDispatchToProps)(TodoApp);