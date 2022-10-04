import React, { useState, useMemo, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext(false);
const AuthContextUpdate = createContext();

export function UseAuthContext() {
  return useContext(AuthContext);
}

export function UseAuthContextUpdate() {
  return useContext(AuthContextUpdate);
}

function LoginProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const loginProviderValue = useMemo(
    () => ({ isLogged, setIsLogged }),
    [isLogged, setIsLogged],
  );
  function handleLogin() {
    setIsLogged(true);
  }

  function handleLogout() {
    setIsLogged(false);
  }

  const handleLoginMemo = useMemo(() => ({ handleLogin, handleLogout }), []);

  return (
    <AuthContext.Provider value={loginProviderValue}>
      <AuthContextUpdate.Provider value={handleLoginMemo}>
        {children}
      </AuthContextUpdate.Provider>
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
