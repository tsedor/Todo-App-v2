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
import { addTodoDialog, leftMenu } from '../actions/index';

const TodoApp = ({ addTodoButtonClick, leftMenu }) => (
  <div>
    <AppBar 
      iconElementRight={<IconButton onClick={addTodoButtonClick}><Add /></IconButton>} 
      onLeftIconButtonTouchTap={() => leftMenu(true)} 
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
  leftMenu: open => dispatch(leftMenu(open))
})

export default connect(null, mapDispatchToProps)(TodoApp);