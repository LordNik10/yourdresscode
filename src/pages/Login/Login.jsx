import { Typography, Stack, TextField, Button } from '@mui/material';
import { btnStyle } from '../../config/utility';

function Login() {
  return (
    <Stack
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <form
        style={{
          boxShadow: 'rgb(0 0 0 / 20%) 0px 0px 10px -1px',
          padding: '20px',
        }}
      >
        <Stack
          flexDirection="column"
          alignItems="center"
          width="300px"
          spacing={3}
        >
          <Typography component="h1" fontSize="30px">
            Login
          </Typography>
          <TextField
            sx={{
              borderColor: 'orange',
            }}
            label="Username"
            variant="outlined"
          />
          <TextField label="Password" variant="outlined" />
          <Button sx={btnStyle}>Login</Button>
        </Stack>
      </form>
    </Stack>
  );
}

export default Login;
