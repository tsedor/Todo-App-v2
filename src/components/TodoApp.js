import React from 'react';
import AppBar from 'material-ui/AppBar';
import Add from 'material-ui/svg-icons/content/add-circle-outline';
import IconButton from 'material-ui/IconButton';
import { connect } from 'react-redux';

import TodoList from './TodoList';
import FilterSelector from './FilterSelector';
import AddTodoDialog from './AddTodoDialog';
import AboutDialog from './AboutDialog';
import LeftMenu from './LeftMenu';
import { addTodoDialog, toggleMenu } from '../actions/index';

const TodoApp = ({ addTodoButtonClick, toggleMenu }) => (
  <div>
    <AppBar 
      iconElementRight={<IconButton onClick={addTodoButtonClick}><Add /></IconButton>} 
      onLeftIconButtonTouchTap={toggleMenu} 
    />
    <FilterSelector />
    <TodoList />
    <AddTodoDialog />
    <AboutDialog />
    <LeftMenu />
  </div>
)

const mapDispatchToProps = dispatch => ({
  addTodoButtonClick: () => dispatch(addTodoDialog()),
  toggleMenu: () => dispatch(toggleMenu())
})

export default connect(null, mapDispatchToProps)(TodoApp);