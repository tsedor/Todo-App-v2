import React from 'react';
import AppBar from 'material-ui/AppBar';
import Add from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { connect } from 'react-redux';

import TodoList from './TodoList';
import FilterSelector from './FilterSelector';
import AddTodoDialog from './AddTodoDialog';
import AboutDialog from './AboutDialog';
import LeftMenu from './LeftMenu';
import { addTodoDialog, leftMenu } from '../actions/index';
import PropTypes from 'prop-types';

const TodoApp = ({ addTodoButtonClick, leftMenu }) => (
  <div>
    <AppBar 
      onLeftIconButtonTouchTap={() => leftMenu(true)} 
    />
    <FilterSelector />
    <TodoList />
    <AddTodoDialog />
    <AboutDialog />
    <LeftMenu />
    <FloatingActionButton onClick={addTodoButtonClick} style={{left: "auto", right: 25, top: "auto", bottom: 25, position: "fixed"}}>
      <Add />
    </FloatingActionButton>
  </div>
)

TodoApp.propTypes = {
  addTodoButtonClick: PropTypes.func.isRequired,
  leftMenu: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  addTodoButtonClick: addTodoDialog,
  leftMenu
}

export default connect(null, mapDispatchToProps)(TodoApp);