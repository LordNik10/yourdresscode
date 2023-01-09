import { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { useFirebase } from '../../firebase/hooks/useFirebase';
import { btnStyle, regexPassword } from '../../config/utility';

export default function Register() {
  const [formInfo, setFormInfo] = useState({
    username: '',
    password: '',
  });
  const [isPasswordInValid, setIsPasswordInValid] = useState(false);
  const { createNewUser } = useFirebase();

  const onSubmiteHandleCreateAccount = (e) => {
    e.preventDefault();
    if (!regexPassword.test(formInfo.password)) {
      setIsPasswordInValid(true);
      return;
    }

    createNewUser(formInfo.username, formInfo.password);
  };

  const handleOnChangeUsername = (e) => {
    setFormInfo((prev) => ({ ...prev, username: e.target.value }));
  };

  const handleOnChangePassword = (e) => {
    setFormInfo((prev) => ({ ...prev, password: e.target.value }));
  };
  return (
    <Stack
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <form
        onSubmit={onSubmiteHandleCreateAccount}
        style={{
          width: '300px',
        }}
      >
        <Stack
          flexDirection="column"
          alignItems="center"
          width={{ xs: '80%', md: '100%' }}
          spacing={3}
          sx={{
            boxShadow: 'rgb(0 0 0 / 20%) 0px 0px 10px -1px',
            padding: '20px',
          }}
        >
          <Typography component="h1" fontSize="30px">
            Register now
          </Typography>
          <Typography component="p" fontSize="12px" color="red">
            {isPasswordInValid && 'password or username are not valid'}
          </Typography>
          <TextField
            autoComplete="username"
            placeholder="username"
            label="Username"
            variant="outlined"
            type="email"
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
            Create
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
