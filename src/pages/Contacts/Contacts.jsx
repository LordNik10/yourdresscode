import { Button, Grid, Stack, TextField, Typography } from '@mui/material';

import imgContacts from '../../assests/contact.jpg';
import './Contacts.scss';

function Contacts() {
  return (
    <Stack
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      height="100%"
      sx={{
        backgroundImage: `url(${imgContacts})`,
        backgroundPosition: 'center',
        backgroundSize: 'center',
        paddingBottom: '10px',
      }}
    >
      <Typography component="h1" sx={{ fontSize: '40px', color: 'white' }}>
        Contacts
      </Typography>
      <Stack
        flexDirection="row"
        justifyContent="center"
        width="100%"
        height="100%"
      >
        <Grid
          container
          columns={2}
          rowSpacing={3}
          columnSpacing={3}
          width={{ xs: '80%', md: '40%' }}
          justifyContent="center"
          marginTop={2}
        >
          <Grid item xs={2} md={1} justifyContent="center">
            <Stack flexDirection="row" justifyContent="center">
              <TextField
                id="filled-basic"
                label="Name"
                variant="outlined"
                className="textfield"
                fullWidth
                // sx={{ backgroundColor: 'white' }}
              />
            </Stack>
          </Grid>
          <Grid item xs={2} md={1}>
            <Stack flexDirection="row" justifyContent="center">
              <TextField
                id="filled-basic"
                label="Surname"
                variant="outlined"
                sx={{ backgroundColor: 'white' }}
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid item xs={2} md={1} justifyContent="center">
            <Stack flexDirection="row" justifyContent="center">
              <TextField
                id="filled-basic"
                label="Email"
                variant="outlined"
                className="textfield"
                // sx={{ backgroundColor: 'white' }}
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid item xs={2} md={1}>
            <Stack flexDirection="row" justifyContent="center">
              <TextField
                id="filled-basic"
                label="Telephone"
                variant="outlined"
                sx={{ backgroundColor: 'white' }}
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid item xs={2} md={2}>
            <Stack flexDirection="row" justifyContent="center" width="100%">
              <textarea
                id="w3review"
                name="w3review"
                style={{ resize: 'none', width: '100%', height: '150px' }}
              />
            </Stack>
          </Grid>
          <Grid item xs={2} md={2}>
            <Stack flexDirection="row" justifyContent="center" width="100%">
              <Button
                sx={{
                  backgroundColor: 'none',
                  outline: '1px solid orange',
                  color: 'orange',
                  fontSize: '15px',
                  height: '35px',
                  ':hover': {
                    backgroundColor: 'orange',
                    color: 'white',
                  },
                  width: '200px',
                }}
              >
                Add Cart
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}

export default Contacts;
