import { Typography, Stack, TextField, Button } from '@mui/material';
import { btnStyle } from '../../config/utility';
import { useAuthContext } from '../../context/auth';

function Login() {
  const { handleLogin } = useAuthContext();

  function onSubmiteHandleLogin(e) {
    e.preventDefault();
    // eslint-disable-next-line
    console.log('ciao');
    handleLogin(true);
  }

  return (
    <Stack
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <form
        onSubmit={onSubmiteHandleLogin}
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
            autoComplete="username"
            placeholder="username"
            label="Username"
            variant="outlined"
            autoFocus
            required
          />
          <TextField
            label="Password"
            autoComplete="Password"
            placeholder="Password"
            variant="outlined"
            type="password"
            required
          />
          <Button sx={btnStyle} type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}

export default Login;
