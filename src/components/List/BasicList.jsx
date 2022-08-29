import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function BasicList({ categories }) {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {categories.map((el) => (
            <ListItem disablePadding key={el}>
              <ListItemButton>
                <ListItemText primary={el} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}

BasicList.defaultProps = {
  categories: [],
};

BasicList.propTypes = {
  categories: PropTypes.arrayOf(String),
};
