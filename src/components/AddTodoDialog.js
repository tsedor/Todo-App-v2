import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';

import { addTodoDialog, addTodoInputValueChange, addTodo } from '../actions/index';

const AddTodoDialog = ({ addTodoDialog, cancelButtonClick, todoInputChange, addTodoInputValue, addTodo }) => (
  <Dialog
    title="Dodaj todo"
    actions={[
      <FlatButton 
        label="Anuluj" 
        primary={true} 
        onClick={cancelButtonClick}
      />, 
      <FlatButton 
        label="Dodaj" 
        primary={true} 
        onClick={() => addTodo(addTodoInputValue)}
      />]}
    open={addTodoDialog}
  >
    <TextField hintText="Treść" fullWidth={true} onChange={todoInputChange} value={addTodoInputValue} />
  </Dialog>
)
const mapStateToProps = state => ({
  addTodoDialog: state.appState.addTodoDialog,
  addTodoInputValue: state.appState.addTodoInputValue
})

const mapDispatchToProps = dispatch => ({
  cancelButtonClick: () => dispatch(addTodoDialog()),
  todoInputChange: e => dispatch(addTodoInputValueChange(e.target.value)),
  addTodo: todo => dispatch(addTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoDialog);