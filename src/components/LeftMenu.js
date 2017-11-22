import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Cancel from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

import { showAboutDialog, leftMenu } from '../actions';

import { connect } from 'react-redux';

const LeftMenu = ({ menuOpen, leftMenu, showAboutDialog }) => (
  <Drawer open={menuOpen} docked={false} onRequestChange={open => leftMenu(open)}>
    <IconButton style={{textAlign: "right"}} onClick={() => leftMenu(false)}><Cancel /></IconButton>
      <MenuItem primaryText="O programie" onClick={showAboutDialog} />
  </Drawer>
)

const mapStateToProps = state => ({
  menuOpen: state.appState.menu
})

const mapDispatchToProps = dispatch => ({
  showAboutDialog: () => dispatch(showAboutDialog()),
  leftMenu: open => dispatch(leftMenu(open))
})

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);