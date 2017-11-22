import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TodoApp from './components/TodoApp';

import './styles/index.css';

const initialAppState = {
  addTodoDialog: false,
  addTodoInputValue: "",
  filter: 1,
  menu: false,
  aboutDialog: false,
  nextId: 1
}
const todos = localStorage.getItem("todos") !== null ? JSON.parse(localStorage.getItem("todos")) : [];
const nextId = localStorage.getItem("nextId") !== null ? parseInt(localStorage.getItem("nextId"), 10) : 1;

const initialState = {todos, appState: {...initialAppState, nextId}}

const store = createStore(reducers, initialState);

// only for dev
store.subscribe(() => console.log(store.getState()))

store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().todos));
  localStorage.setItem("nextId", store.getState().appState.nextId);
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <TodoApp />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);