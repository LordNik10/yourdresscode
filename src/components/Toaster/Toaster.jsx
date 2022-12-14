import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { useSnackBar } from '../../context/Snackbar';

function Toaster({ time, position }) {
  const { message, type, setSnackBar } = useSnackBar();

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBar('');
  };

  return (
    <Snackbar
      open={!!message}
      autoHideDuration={time}
      anchorOrigin={position}
      onClose={handleCloseSnackbar}
    >
      <Alert severity={type}>{message ? <span>{message}</span> : null}</Alert>
    </Snackbar>
  );
}

Toaster.defaultProps = {
  position: {},
  time: 0,
};

Toaster.propTypes = {
  position: PropTypes.objectOf(PropTypes.shape),
  time: PropTypes.number,
};

export default Toaster;
