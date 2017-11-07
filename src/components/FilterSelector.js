import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const FilterSelector = () => (
  <SelectField fullWidth={true} value={1} style={{paddingLeft: 5}}>
    <MenuItem value={1} primaryText="Wszystkie" />
    <MenuItem value={2} primaryText="Aktywne" />
    <MenuItem value={3} primaryText="Zakończone" />
  </SelectField>
)

export default FilterSelector;