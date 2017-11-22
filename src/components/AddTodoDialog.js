import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';

import { addTodoDialog, addTodoInputValueChange, addTodo } from '../actions/index';

const AddTodoDialog = ({ addTodoDialog, cancelButtonClick, todoInputChange, addTodoInputValue, addTodo, nextId }) => (
  <Dialog
    title="Dodaj nowe zadanie"
    actions={[
      <FlatButton 
        label="Anuluj" 
        primary={true} 
        onClick={cancelButtonClick}
      />, 
      <FlatButton 
        label="Dodaj" 
        primary={true} 
        onClick={() => addTodo(addTodoInputValue, nextId)}
      />]}
    open={addTodoDialog}
  >
    <TextField hintText="Treść" autoFocus fullWidth={true} onChange={todoInputChange} value={addTodoInputValue} onKeyPress={ev => {
      return (ev.key === "Enter") ? addTodo(addTodoInputValue, nextId) : null;
    }} />
  </Dialog>
)
const mapStateToProps = state => ({
  addTodoDialog: state.appState.addTodoDialog,
  addTodoInputValue: state.appState.addTodoInputValue,
  nextId: state.appState.nextId
})

const mapDispatchToProps = dispatch => ({
  cancelButtonClick: () => dispatch(addTodoDialog()),
  todoInputChange: e => dispatch(addTodoInputValueChange(e.target.value)),
  addTodo: (todo, nextId) => dispatch(addTodo(todo, nextId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoDialog);