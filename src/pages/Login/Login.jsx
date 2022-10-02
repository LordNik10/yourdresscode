import { Typography, Stack, TextField, Button } from '@mui/material';

function Login() {
  return (
    <Stack
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <form>
        <Stack
          flexDirection="column"
          alignItems="center"
          width="300px"
          spacing={3}
        >
          <Typography component="h1" fontSize="30px">
            Login
          </Typography>
          <TextField label="Username" variant="outlined" />
          <TextField label="Password" variant="outlined" />
          <Button>Login</Button>
        </Stack>
      </form>
    </Stack>
  );
}

export default Login;
