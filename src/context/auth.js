import React, {
  useState,
  useMemo,
  createContext,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { useSnackBar } from './Snackbar';

const AuthContext = createContext({
  isLogged: false,
  handleLogin: () => {},
});

export function useAuthContext() {
  return useContext(AuthContext);
}

function LoginProvider({ children }) {
  const [login, setIsLogged] = useState({
    isLogged: false,
    handleLogin: () => {},
  });
  const { setSnackBar } = useSnackBar();

  function handleLogin(loginValue) {
    setIsLogged((prevValue) => ({ prevValue, isLogged: loginValue }));
  }

  const memoizedHandleLogin = useCallback(handleLogin, []);

  useEffect(() => {
    if (
      sessionStorage.getItem('token') &&
      sessionStorage.getItem('expirationDate') >= Date.now()
    ) {
      handleLogin(true);
    } else {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('expirationDate');
      if (sessionStorage.getItem('token')) {
        setSnackBar('Your session is over, please log in again', 'error');
      }
    }
  }, [setSnackBar]);

  const handleLoginMemo = useMemo(
    () => ({ isLogged: login.isLogged, handleLogin: memoizedHandleLogin }),
    [login, memoizedHandleLogin],
  );

  return (
    <AuthContext.Provider value={handleLoginMemo}>
      {children}
    </AuthContext.Provider>
  );
}

export default LoginProvider;

LoginProvider.defaultProps = {
  children: null,
};

LoginProvider.propTypes = {
  children: PropTypes.element,
};
