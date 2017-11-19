import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { connect } from 'react-redux';
import { changeFilter } from '../actions/index';

const FilterSelector = ({ filter, changeFilter }) => (
  <SelectField fullWidth={true} value={filter} style={{paddingLeft: 5}} onChange={(e, i, v) => changeFilter(v)}>
    <MenuItem value={1} primaryText="Wszystkie" />
    <MenuItem value={2} primaryText="Aktywne" />
    <MenuItem value={3} primaryText="Zakończone" />
  </SelectField>
)

const mapStateToProps = state => ({
  filter: state.appState.filter
})

const mapDispatchToProps = dispatch => ({
  changeFilter: id => dispatch(changeFilter(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelector);