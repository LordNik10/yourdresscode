import React, {
  useState,
  useMemo,
  createContext,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

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

  function handleLogin(loginValue) {
    setIsLogged((prevValue) => ({ prevValue, isLogged: loginValue }));
  }

  const memoizedHandleLogin = useCallback(handleLogin, []);

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      handleLogin(true);
    }
  }, []);

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
