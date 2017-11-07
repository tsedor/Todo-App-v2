import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TodoApp from './components/TodoApp';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <TodoApp />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);