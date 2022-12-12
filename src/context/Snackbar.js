import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
} from 'react';
import PropTypes from 'prop-types';

const configureContext = {
  message: '',
  type: 'info',
  setSnackBar: () => {},
};

const SnackBarContext = createContext(configureContext);

export function useSnackBar() {
  return useContext(SnackBarContext);
}

function SnackBarProvider({ children }) {
  const [snackBarValue, setSnackBarValue] = useState(configureContext);

  const setSnackBar = useCallback((message, type) => {
    setSnackBarValue({
      message,
      type,
    });
  }, []);

  const snackBarProviderValue = useMemo(
    () => ({
      message: snackBarValue.message,
      type: snackBarValue.type,
      setSnackBar,
    }),
    [snackBarValue.message, snackBarValue.type, setSnackBar],
  );

  return (
    <SnackBarContext.Provider value={snackBarProviderValue}>
      {children}
    </SnackBarContext.Provider>
  );
}

export default SnackBarProvider;

SnackBarProvider.defaultProps = {
  children: null,
};

SnackBarProvider.propTypes = {
  children: PropTypes.element,
};
