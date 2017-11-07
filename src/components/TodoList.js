import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Done from 'material-ui/svg-icons/action/done';
import Clear from 'material-ui/svg-icons/content/clear';
import { redA700, lightGreenA700 } from 'material-ui/styles/colors';

const TodoList = () => (
  <List>
    <ListItem 
      style={{textDecoration: "line-through"}} 
      primaryText="Pierwsze Todo" 
      leftIcon={<Done color={lightGreenA700} />} 
      rightIcon={<Clear color={redA700} />}
    />
  </List>
);

export default TodoList;