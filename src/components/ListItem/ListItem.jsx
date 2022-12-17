import PropTypes from 'prop-types';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ListItem({ listItem, label }) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {listItem.map((el) => (
            <MenuItem key={el.id} value={el.id}>
              {el.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

ListItem.defaultProps = {
  listItem: [],
  label: '',
};

ListItem.propTypes = {
  listItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  label: PropTypes.string,
};
