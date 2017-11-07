import React from 'react';
import AppBar from 'material-ui/AppBar';
import Add from 'material-ui/svg-icons/content/add-circle-outline';
import IconButton from 'material-ui/IconButton';

import TodoList from './TodoList';
import FilterSelector from './FilterSelector';

const rightIcon = <IconButton><Add /></IconButton>

const TodoApp = () => (
  <div>
    <AppBar 
      iconElementRight={rightIcon} 
      onLeftIconButtonTouchTap={() => console.log('menu icon')} 
      onRightIconButtonTouchTap={() => console.log('add icon')} 
    />
    <FilterSelector />
    <TodoList />
  </div>
)

export default TodoApp;