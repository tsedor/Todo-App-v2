import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { changeFilter } from '../actions/index';

const FilterSelector = ({ filter, changeFilter }) => (
  <SelectField fullWidth={true} value={filter} onChange={(e, i, v) => changeFilter(v)}>
    <MenuItem value={1} primaryText="Wszystkie" />
    <MenuItem value={2} primaryText="Aktywne" />
    <MenuItem value={3} primaryText="Zakończone" />
  </SelectField>
)

FilterSelector.propTypes = {
  filter: PropTypes.number.isRequired,
  changeFilter: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  filter: state.appState.filter
})

const mapDispatchToProps = dispatch => ({
  changeFilter: id => dispatch(changeFilter(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelector);