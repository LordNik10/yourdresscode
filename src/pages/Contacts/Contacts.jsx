import { Grid, Stack, TextField, Typography } from '@mui/material';
import imgContacts from '../../assests/contact.jpg';

function Contacts() {
  return (
    <Stack
      flexDirection="row"
      justifyContent="center"
      width="100%"
      height="100%"
      sx={{
        backgroundImage: `url(${imgContacts})`,
        backgroundPosition: 'center',
        backgroundSize: 'center',
      }}
    >
      <Stack
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <Typography component="h1" sx={{ fontSize: '30px' }}>
          Contacts
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={8}>
            <TextField
              id="filled-basic"
              label="Filled"
              variant="outlined"
              sx={{ backgroundColor: 'white' }}
            />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}

export default Contacts;
