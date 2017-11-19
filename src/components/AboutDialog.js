import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import { connect } from 'react-redux';
import { showAboutDialog, toggleMenu } from '../actions/index';

const AboutDialog = ({ open, showAboutDialog }) => (
  <Dialog open={open} actions={[<FlatButton label="OK" onClick={showAboutDialog} />]} style={{textAlign: "center"}}>
    <span style={{fontWeight: "bold"}}>O programie</span>
    <div style={{color: "#000", fontSize: "12px", paddingTop: "20px"}}>
      <div><span style={{fontWeight: "bold"}}>Autor:</span> Tomasz Sędor</div>
      <div><span style={{fontWeight: "bold"}}>Kontakt:</span> tomasz [ at ] sedor.pl</div>
    </div>
  </Dialog>
)

const mapStateToProps = state => ({
  open: state.appState.aboutDialog
})

const mapDispatchToProps = dispatch => ({
  showAboutDialog: () => {
    dispatch(toggleMenu());
    dispatch(showAboutDialog())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AboutDialog);