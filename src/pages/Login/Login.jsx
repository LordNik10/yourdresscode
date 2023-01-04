import { Typography, Stack, TextField, Button } from '@mui/material';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { btnStyle } from '../../config/utility';
// import { useAuthContext } from '../../context/auth';
// import { useLastPage } from '../../context/lastPage';
import { useFirebase } from '../../firebase/hooks/useFirebase';

// const CssTextField = withStyles({
//   root: {
//     '& label.Mui-focused': {
//       color: 'white',
//     },
//     '& .MuiInput-underline:after': {
//       borderBottomColor: 'yellow',
//     },
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: 'white',
//       },
//       '&:hover fieldset': {
//         borderColor: 'white',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: 'yellow',
//       },
//     },
//   },
// })(TextField);
function Login() {
  // username: johnd
  // password: yourdresscode3
  // const { handleLogin } = useAuthContext();
  // const { lastPage } = useLastPage();
  // const navigate = useNavigate();
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [formInfo, setFormInfo] = useState({});
  const { loginEmailAndPassword } = useFirebase();

  async function onSubmiteHandleLogin(e) {
    e.preventDefault();
    try {
      loginEmailAndPassword(formInfo.username, formInfo.password);
    } catch (error) {
      setIsPasswordValid(true);
    }
    // if (
    //   formInfo.username === 'johnd' &&
    //   formInfo.password === 'yourdresscode3'
    // ) {
    //   handleLogin(true);
    //   navigate(lastPage);
    // } else {
    //   setIsPasswordValid(true);
    // }
  }

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
        onSubmit={onSubmiteHandleLogin}
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
            Login
          </Typography>
          <Typography component="p" fontSize="12px" color="red">
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
