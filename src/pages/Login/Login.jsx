import { Typography, Stack, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { btnStyle } from '../../config/utility';
import { useAuthContext } from '../../context/auth';

function Login() {
  // username: johnd
  // password: yourdresscode3
  const { handleLogin } = useAuthContext();
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [formInfo, setFormInfo] = useState({});

  async function onSubmiteHandleLogin(e) {
    e.preventDefault();
    // eslint-disable-next-line
    console.log('ciao');

    if (
      formInfo.username === 'johnd' &&
      formInfo.password === 'yourdresscode3'
    ) {
      handleLogin(true);
    } else {
      setIsPasswordValid(true);
    }
  }

  const handleOnChangeUsername = (e) => {
    setFormInfo((prev) => ({ ...prev, username: e.target.value }));
    // eslint-disable-next-line
    console.log(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setFormInfo((prev) => ({ ...prev, password: e.target.value }));
    // eslint-disable-next-line
    console.log(e.target.value);
  };

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
          <Typography component="p" fontSize="20px">
            {isPasswordValid && 'password or username are not valid'}
          </Typography>
          <TextField
            autoComplete="username"
            placeholder="username"
            label="Username"
            variant="outlined"
            autoFocus
            onChange={(e) => handleOnChangeUsername(e)}
            // required
          />
          <TextField
            label="Password"
            autoComplete="Password"
            placeholder="Password"
            variant="outlined"
            type="password"
            onChange={(e) => handleOnChangePassword(e)}
            // required
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
