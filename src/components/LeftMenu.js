import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { showAboutDialog } from '../actions';

import { connect } from 'react-redux';

const LeftMenu = ({ menuOpen, showAboutDialog }) => (
  <Drawer open={menuOpen}>
      <MenuItem primaryText="O programie" onClick={showAboutDialog} />
  </Drawer>
)

const mapStateToProps = state => ({
  menuOpen: state.appState.menu
})

const mapDispatchToProps = dispatch => ({
  showAboutDialog: () => dispatch(showAboutDialog())
})

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);