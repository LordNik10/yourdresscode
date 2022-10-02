import { Typography, Stack, TextField } from '@mui/material';

function Login() {
  return (
    <Stack
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Stack flexDirection="column" alignItems="center" width="300px">
        <Typography component="h1">Login</Typography>
        <TextField label="Username" variant="outlined" />
      </Stack>
    </Stack>
  );
}

export default Login;
